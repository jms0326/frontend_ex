# Kindred Canine - 바이브 코딩 프로젝트

## 프로젝트 개요 (Project Overview)
이 프로젝트는 반려견 건강 관리 플랫폼 **Kindred Canine**의 정적 웹 사이트를 바이브 코딩 방식으로 구축한 것입니다. **Kindred Canine**은 반려동물 주인들이 강아지의 건강 검진을 쉽게 예약하고, 건강 관리 상품을 탐색하며, 맞춤형 건강 솔루션을 제공받을 수 있는 플랫폼입니다. 이 프로젝트는 AGENTS.md, SKILL.md, DESIGN.md를 포함한 일관된 디자인 시스템과 개발 가이드라인을 기반으로 구축되었습니다.

## 디렉토리 구조 (Directory Structure)

```
frontend_ex/
├── 260527/                       # 2026-05-27 실습 폴더
│   ├── AGENTS.md                 # 에이전트 행동 지침
│   ├── DESIGN.md                 # Kindred Canine 디자인 시스템
│   ├── SKILL.md                  # UI/UX 개발 가이드라인
│   └── public/                   # 정적 웹 사이트 빌드 폴더
│       ├── index.html            # 메인 페이지
│       ├── login/
│       │   └── index.html        # 로그인 페이지
│       ├── signup/
│       │   └── index.html        # 회원가입 페이지
│       ├── reservation/
│       │   └── index.html        # 예약 페이지
│       └── checkup-products/
│           └── index.html        # 상품 안내 페이지
└── skills/
    └── bootstrap/
        └── SKILL.md              # Bootstrap 개발 SKILL
```

## 핵심 원칙 및 설계 의도 (Key Principles & Design Intent)

### 1. 통일된 디자인 시스템 (Unified Design System)
- **Kindred Canine 디자인 시스템 (DESIGN.md)**: 이 프로젝트의 모든 UI/UX는 `DESIGN.md`에 정의된 디자인 토큰(색상, 타이포그래피, 간격, 모양)을 엄격히 따릅니다. 이는 브랜드 일관성과 사용자 경험의 질을 보장합니다.
- **Tailwind CSS**: 디자인 시스템의 원칙을 효율적으로 구현하기 위해 Tailwind CSS를 사용합니다. `tailwind.config`에 커스텀 색상(`primary`, `surface`, `on-surface` 등), 글꼴(`Plus Jakarta Sans`), 및 간격을 확장하여 사용합니다.

### 2. 반응형 레이아웃 (Responsive Layout)
- **모바일 퍼스트 (Mobile-First)**: 모든 페이지는 모바일 환경을 먼저 고려하여 설계되었습니다. 데스크톱에서는 그리드 레이아웃을 활용하여 콘텐츠를 최적화합니다.
- **Bottom Navigation**: 모바일 환경에서 핵심 네비게이션(홈, 상품, 예약, 마이페이지)을 하단 탭 바로 제공하여 직관적인 UX를 구현합니다.
- **숨겨진 요소**: 모바일에서는 데스크톱 전용 네비게이션과 하단 푸터를 숨기고, 데스크톱에서는 모바일 전용 하단 탭 바를 숨깁니다.

### 3. 재사용 가능한 컴포넌트 (Reusable Components)
- **TopAppBar (헤더)**: 모든 페이지 상단에 고정된 헤더를 제공하며, 현재 페이지 상태에 따라 네비게이션 링크의 스타일을 다르게 적용합니다.
- **BottomNavBar (하단 탭)**: 모바일에서 중요한 페이지로의 빠른 이동을 가능하게 합니다. 활성화된 탭의 시각적 피드백을 제공합니다.
- **Floating Action Button (FAB)**: 주요 행동 유도(예약)을 돕는 고정된 버튼으로, 사용자의 주요 목표를 달성하는 데 도움을 줍니다.

### 4. 사용자 상호작용 (User Interactions)
- **미세 상호작용 (Micro-interactions)**: 버튼 클릭 시 `active:scale-95`, `hover:brightness-110` 등의 미세한 시각적 피드백을 제공하여 반응형 웹의 느낌을 살립니다.
- **폼 검증 (Form Validation)**: 예약, 로그인, 회원가입 폼에 기본적인 HTML5 유효성 검사(`required`)를 적용하고, 특정 필드에 대한 사용자 정의 로직(비밀번호 일치 확인)을 JavaScript로 구현합니다.
- **네비게이션**: 모든 버튼과 링크는 실제 페이지 또는 `login/index.html`과 같은 다른 페이지로 연결되어 원활한 사용자 흐름을 제공합니다.

## 기술 스택 (Tech Stack)
- **Frontend**: HTML5
- **Styling**: Tailwind CSS (CDN), Custom CSS (Design System Variables)
- **Icons**: Material Symbols (Google Fonts)
- **Fonts**: Plus Jakarta Sans (Google Fonts)
- **Build Tool**: 정적 파일 서빙 (Static File Serving)

## 파일 설명 (File Descriptions)
- `AGENTS.md`: AI 에이전트의 역할, 응답 품질, 코드 작성 규칙, 폴더/파일 명명 규칙을 정의합니다.
- `DESIGN.md`: Kindred Canine 브랜드의 시각적 언어를 정의하는 디자인 시스템 문서입니다. 색상 팔레트, 타이포그래피, 간격, 모양 등을 포함합니다.
- `SKILL.md`: UI/UX 개발을 위具제한 메뉴얼입니다. Bootstrap과의 차이점을 명확히 하고, Tailwind CSS를 사용한 구체적인 구현 가이드와 브랜드 스타일을 반영한 컴포넌트 작성 규칙을 정의합니다.
- `public/`: 사용자가 실제로 방문하는 모든 HTML 페이지를 포함합니다.

## 설치 및 실행 (Installation & Setup)
이 프로젝트는 정적 HTML, CSS, JavaScript 파일로 구성되어 있어 별도의 빌드 과정 없이 모든 웹 서버에서 바로 실행할 수 있습니다.

1.  **저장소 복제 (Clone the repository)**: Git을 사용하여 프로젝트를 로컬 머신에 복제합니다.
2.  **Live Server 실행**: VS Code의 Live Server 확장 프로그램이나 Python의 `http.server` 등을 사용하여 `public` 폴더를 서빙합니다.
    ```bash
    # 프로젝트 루트에서
    python -m http.server 8000
    ```
3.  **접속**: 브라우저에서 `http://localhost:8000`으로 접속합니다.

---

_이 프로젝트는 지속적으로 발전하며, 사용자 피드백을 반영하여 개선될 예정입니다._
