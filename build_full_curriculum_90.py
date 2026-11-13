# -*- coding: utf-8 -*-
"""
build_full_curriculum_90.py
Expands Bobi English Adventure curriculum from 16 levels to 90 levels per tier.
12 tiers * 90 levels = 1,080 levels total.
Sets window.BOBI_VERSION = '2.4.0'; and window.CURRICULUM_VERSION = '2.4.0';
Ensures strict option validation: exactly 4 unique choices, 1 correct, same-tier distractors.
"""

import json
import random
import importlib
import re

random.seed(42)  # For deterministic, reproducible builds

TIER_IDS = [
    'elem_beg', 'elem_mid', 'elem_adv',
    'jh_beg', 'jh_mid', 'jh_adv',
    'sh_beg', 'sh_mid', 'sh_adv',
    'col_beg', 'col_mid', 'col_adv'
]

EMOJI_POOL = [
    '🌱', '🌟', '🐣', '🎈', '🍀', '🌸', '⚡', '🚀', '💎', '💡',
    '🎯', '🎨', '🔥', '🏆', '👑', '⭐', '✨', '🌈', '🎉', '🍎',
    '📘', '📚', '🌻', '🌞', '🛸', '🏎️', '⚾', '🏀', '⚽', '🧭',
    '🏛️', '🔬', '🌍', '📜', '⚖️', '🎭', '💻', '💼', '📊', '🔑'
]

def load_existing_curriculum():
    with open('curriculum.js', 'r', encoding='utf-8') as f:
        content = f.read()
    idx = content.find('window.CURRICULUM_DATA =')
    data_str = content[idx + len('window.CURRICULUM_DATA ='):].strip().rstrip(';')
    return json.loads(data_str)

def main():
    print("Loading existing curriculum...")
    tiers_data = load_existing_curriculum()
    assert len(tiers_data) == 12

    # Map tier_id to tier object
    tier_map = {t['id']: t for t in tiers_data}

    total_levels_before = sum(len(t['lessons']) for t in tiers_data)
    print(f"Total levels before: {total_levels_before}")

    # Build full vocabulary pool per tier (combining existing 16 lessons + 74 new themes)
    tier_vocab_pools = {}
    tier_new_themes = {}

    for tier_id in TIER_IDS:
        mod = importlib.import_module(f'curriculum_data_builders.{tier_id}')
        new_themes = mod.themes
        assert len(new_themes) == 74, f"{tier_id} has {len(new_themes)} themes"
        tier_new_themes[tier_id] = new_themes

        # Collect existing vocabs from lessons 1-16
        pool = []
        seen_zh = set()
        seen_en = set()
        for l in tier_map[tier_id]['lessons']:
            for v in l.get('vocabularies', []):
                en = v['en'].strip()
                zh = v['zh'].strip()
                if zh not in seen_zh and en not in seen_en:
                    pool.append((en, zh))
                    seen_zh.add(zh)
                    seen_en.add(en)

        # Collect new vocabs from new themes
        for title, icon, vocabs, sentence, zh_trans in new_themes:
            for en, zh in vocabs:
                en = en.strip()
                zh = zh.strip()
                if zh not in seen_zh and en not in seen_en:
                    pool.append((en, zh))
                    seen_zh.add(zh)
                    seen_en.add(en)

        tier_vocab_pools[tier_id] = pool
        print(f"Tier {tier_id}: vocabulary pool size = {len(pool)} unique pairs")

    # Now generate lessons 17 to 90 for each tier
    for tier_id in TIER_IDS:
        tier_obj = tier_map[tier_id]
        new_themes = tier_new_themes[tier_id]
        pool = tier_vocab_pools[tier_id]

        # Verify existing lessons are preserved 1..16
        assert len(tier_obj['lessons']) == 16, f"Expected 16 existing lessons in {tier_id}"

        for idx, (theme_title, theme_icon, vocabs, target_sentence, target_chinese) in enumerate(new_themes, start=17):
            lesson_id = f"{tier_id}-l{idx}"
            lesson_title = f"第 {idx} 關：{theme_title}"
            lesson_desc = f"掌握 {vocabs[0][0]}、{vocabs[1][0]} 等核心詞彙"
            lesson_vocabs = [{'en': w, 'zh': z} for w, z in vocabs]

            # 1. Choice question (tests vocabs[0])
            target_en = vocabs[0][0]
            target_zh = vocabs[0][1]

            # Pick 3 distractors from pool with different zh and en
            distractors = []
            available_pool = [p for p in pool if p[1] != target_zh and p[0] != target_en]
            # Prioritize similar length / style if possible
            random.shuffle(available_pool)
            for cand in available_pool:
                if cand[1] not in [d[1] for d in distractors] and cand[1] != target_zh:
                    distractors.append(cand)
                if len(distractors) == 3:
                    break

            choice_options = []
            used_emojis = random.sample(EMOJI_POOL, 4)
            # Correct option
            choice_options.append({
                'correct': True,
                'emoji': used_emojis[0],
                'en': target_en,
                'zh': target_zh
            })
            # 3 distractors
            for i, d in enumerate(distractors):
                choice_options.append({
                    'correct': False,
                    'emoji': used_emojis[i + 1],
                    'en': d[0],
                    'zh': d[1]
                })
            random.shuffle(choice_options)

            q_choice = {
                'type': 'choice',
                'prompt': f'選出「{target_en}」的正確中文意思',
                'instruction': f'請問「{target_en}」在繁體中文中是什麼意思？',
                'en': target_en,
                'audioText': target_en,
                'options': choice_options
            }

            # 2. Scramble question
            # Target tokens from target_sentence
            tokens = target_sentence.strip().split()
            # Pool adds 2 distractor tokens (single words from pool)
            distractor_tokens = []
            for cand in available_pool:
                word_clean = re.sub(r'[^\w]', '', cand[0].split()[0])
                if word_clean and word_clean.lower() not in [t.lower().strip('.,!?') for t in tokens]:
                    if word_clean not in distractor_tokens:
                        distractor_tokens.append(word_clean)
                if len(distractor_tokens) == 2:
                    break
            scramble_pool = list(tokens) + distractor_tokens
            random.shuffle(scramble_pool)

            q_scramble = {
                'type': 'scramble',
                'prompt': '點選字卡重組出正確的英文句子',
                'instruction': f'請看中文重組成英文句子：「{target_chinese}」',
                'targetSentence': target_sentence,
                'targetChinese': target_chinese,
                'targetTokens': tokens,
                'pool': scramble_pool,
                'audioText': target_sentence
            }

            # 3. Listen question (tests vocabs[1])
            listen_en = vocabs[1][0]
            listen_zh = vocabs[1][1]

            listen_distractors = []
            available_listen = [p for p in pool if p[1] != listen_zh and p[0] != listen_en]
            random.shuffle(available_listen)
            for cand in available_listen:
                if cand[1] not in [d[1] for d in listen_distractors] and cand[1] != listen_zh:
                    listen_distractors.append(cand)
                if len(listen_distractors) == 3:
                    break

            listen_options = []
            listen_options.append({
                'correct': True,
                'en': listen_en,
                'text': f"{listen_en} ({listen_zh})",
                'zh': listen_zh
            })
            for d in listen_distractors:
                listen_options.append({
                    'correct': False,
                    'en': d[0],
                    'text': f"{d[0]} ({d[1]})",
                    'zh': d[1]
                })
            random.shuffle(listen_options)

            q_listen = {
                'type': 'listen',
                'prompt': '聽力測驗：點擊喇叭並選出聽到的詞語',
                'instruction': '點擊喇叭聆聽發音，選出正確意思：',
                'audioText': listen_en,
                'options': listen_options
            }

            # 4. Match question (tests all 4 vocabularies)
            match_pairs = [{'en': w, 'zh': z} for w, z in vocabs]
            q_match = {
                'type': 'match',
                'prompt': '詞彙對對碰：配對英文與中文',
                'instruction': '點選左側英文與右側對應的繁體中文：',
                'pairs': match_pairs
            }

            new_lesson = {
                'id': lesson_id,
                'title': lesson_title,
                'icon': theme_icon,
                'desc': lesson_desc,
                'vocabularies': lesson_vocabs,
                'questions': [q_choice, q_scramble, q_listen, q_match]
            }

            tier_obj['lessons'].append(new_lesson)

        assert len(tier_obj['lessons']) == 90, f"Tier {tier_id} does not have 90 lessons, has {len(tier_obj['lessons'])}"

    total_levels_after = sum(len(t['lessons']) for t in tiers_data)
    print(f"Total levels after expansion: {total_levels_after} (12 tiers * 90 levels)")
    assert total_levels_after == 1080

    # Validate all questions
    print("Validating options across all 1,080 levels...")
    for t in tiers_data:
        for l in t['lessons']:
            for q in l['questions']:
                if 'options' in q:
                    opts = q['options']
                    if len(opts) != 4:
                        raise ValueError(f"Lesson {l['id']} question has {len(opts)} options, expected 4")
                    correct_count = sum(1 for o in opts if o.get('correct'))
                    if correct_count != 1:
                        raise ValueError(f"Lesson {l['id']} has {correct_count} correct options, expected 1")
                    zh_set = set(o.get('zh') or o.get('text') for o in opts)
                    if len(zh_set) != 4:
                        raise ValueError(f"Lesson {l['id']} duplicate zh in options: {[o.get('zh') for o in opts]}")

    print("All 1,080 levels validated with zero errors!")

    # Write out curriculum.js
    header = (
        "// 波波熱血英語大冒險 (Bobi English Adventure)\n"
        "// 全階段・全能分級英語學習系統 (12 大等級・1,080 道熱血關卡，每等級 90 關 3 個月天天闖關)\n"
        "// 嚴格遵守版本對應規範：每次改版必須與 package.json, index.html, README.md, CHANGELOG.md 完全一致\n"
        "window.BOBI_VERSION = '2.4.0';\n"
        "window.CURRICULUM_VERSION = '2.4.0';\n\n"
        "window.CURRICULUM_DATA = "
    )

    json_str = json.dumps(tiers_data, ensure_ascii=False, indent=2)
    full_output = header + json_str + ";\n"

    with open('curriculum.js', 'w', encoding='utf-8') as f:
        f.write(full_output)

    print("Successfully wrote curriculum.js with version 2.4.0 and 1,080 levels!")

if __name__ == '__main__':
    main()
