---
name: git-commit-and-push
version: 1.0.0
description: >
  Analyzes staged and unstaged changes in the current git repository,
  groups them into the smallest meaningful logical units, and performs
  a series of granular git commits using the convention
  "<English type>: <Korean message>", then pushes all commits to the
  remote origin branch.
---

<!--
  Created by DINKIssTyle on 2026. Copyright (C) 2026 DINKI'ssTyle. All rights reserved.
-->

# git-commit-and-push Skill

## Overview

This skill automates the process of committing and pushing changes to a remote
Git repository. It follows the **Conventional Commits** specification for the
commit type (English), while writing the commit subject in **Korean** for
human-friendly readability within a Korean-speaking team.

Commit format:
```
<type>: <한글 메시지>

<body — 변경 사항 상세 설명 (선택 사항)>
```

---

## Trigger

Invoke this skill when you need to:

- Commit **all** pending changes (both tracked and new files) in a repository.
- Ensure each commit covers exactly **one logical concern** (atomic commits).
- Push the resulting commits to `origin` without manual intervention.

Example triggers:
- "변경 사항 커밋하고 푸시해줘"
- "지금까지 작업한 거 전부 커밋해줘"
- "git commit and push"

---

## Commit Type Reference

Use the following English types. Match the type to the **primary intent** of
each change group.

| Type       | 사용 시점                                      | Example |
|------------|------------------------------------------------|---------|
| `feat`     | 새로운 기능·페이지·컴포넌트 추가               | `feat: 로그인 폼 컴포넌트 추가` |
| `fix`      | 버그 수정, 오탈자 교정                         | `fix: 버튼 클릭 이벤트 오류 수정` |
| `style`    | CSS·레이아웃·시각적 변경 (로직 변경 없음)      | `style: 헤더 배경색 및 폰트 사이즈 조정` |
| `refactor` | 동작을 바꾸지 않는 코드 구조 개선              | `refactor: 중복 함수 분리 및 정리` |
| `docs`     | README, 주석, AGENTS.md 등 문서 수정           | `docs: AGENTS.md 커밋 컨벤션 섹션 업데이트` |
| `chore`    | 빌드 설정, 폴더 구조, 기타 유지보수            | `chore: 날짜별 폴더 구조 초기 생성` |
| `test`     | 테스트 파일 추가·수정                          | `test: 폼 유효성 검사 단위 테스트 추가` |
| `perf`     | 성능 개선                                      | `perf: 이미지 레이지 로딩 적용` |

---

## Instructions

Follow these steps **strictly and in order**:

### Step 1 — Inspect current state

```bash
git status
git diff --stat HEAD
```

- Identify all changed, new, and deleted files.
- Understand what each file/group of files is responsible for.

### Step 2 — Group changes into atomic units

Apply the following grouping rules:

1. **One concern per commit.** A single commit must address exactly one
   logical unit of work — for example, "새 날짜 폴더의 HTML 뼈대 추가" or
   "CSS 컬러 팔레트 변경".
2. **Never mix unrelated concerns.** If a commit touches both a bug fix and a
   style change, split it into two separate commits.
3. **Documentation is always a separate commit** from code changes.
4. **Config / chore files are always a separate commit** from feature code.
5. **New date folders** (e.g. `260527/`) should each get their own commit
   unless they are trivially empty.

Suggested grouping order:
1. 구조/폴더/설정 변경 (`chore`)
2. 마크업(HTML) 추가 (`feat`)
3. 스타일(CSS) 추가·수정 (`style` / `feat`)
4. 스크립트(JS) 추가·수정 (`feat` / `fix`)
5. 문서(AGENTS.md, README 등) 변경 (`docs`)

### Step 3 — Stage and commit each group

For each group identified in Step 2, run:

```bash
git add <specific files or directories for this group>
git commit -m "<type>: <한글 메시지>"
```

Rules for the commit message:
- **Type**: lowercase English keyword from the table above.
- **Subject**: concise Korean sentence, ≤ 50 characters.
- **No period** at the end of the subject line.
- If additional context is needed, add a blank line followed by a body
  written in Korean.

Example sequence:
```bash
git add AGENTS.md
git commit -m "docs: AGENTS.md 에이전트 행동 지침 초안 작성"

git add 260527/index.html
git commit -m "feat: 260527 날짜 폴더 HTML 기본 구조 추가"

git add 260527/style.css
git commit -m "style: 260527 페이지 기본 CSS 스타일 설정"

git add 260527/main.js
git commit -m "feat: 260527 페이지 인터랙션 스크립트 추가"
```

### Step 4 — Review commits before pushing

```bash
git log --oneline -10
```

Verify that:
- Every commit message follows `<type>: <한글 메시지>` format.
- No commit bundles unrelated changes.
- The commit order is logical (foundation → feature → style → docs).

### Step 5 — Push to remote

```bash
git push origin <current-branch>
```

- Detect the current branch with `git branch --show-current`.
- If the push is rejected due to divergence, **do not force-push** without
  explicit user approval. Report the conflict and wait for instructions.
- On success, report the pushed branch name and number of commits pushed.

---

## Output Format

After completing all commits and the push, report a summary to the user in
the following format (Korean):

```
✅ 커밋 및 푸시 완료!

📦 총 N개의 커밋이 origin/<branch>에 푸시되었습니다.

커밋 목록:
  1. feat: 260527 날짜 폴더 HTML 기본 구조 추가
  2. style: 260527 페이지 기본 CSS 스타일 설정
  3. docs: AGENTS.md 에이전트 행동 지침 초안 작성
  ...
```

---

## Constraints & Safety Rules

- ❌ **Do not** use `git add .` or `git add -A` for the entire repository in a
  single `git commit`. Always stage files **per logical group**.
- ❌ **Do not force-push** (`git push --force`) without explicit user consent.
- ❌ **Do not amend** existing commits that have already been pushed.
- ❌ **Do not** leave unstaged changes after the skill completes. All changes
  visible in `git status` at skill invocation time must be committed.
- ✅ If there are **zero** changes to commit, notify the user politely and exit.
- ✅ If a file was **accidentally staged** in a previous group, use
  `git restore --staged <file>` to move it to the correct group.
