# Smart Memo Space

Smart Memo Space는 최신 웹 디자인 트렌드인 **Glassmorphism(글래스모피즘)**과 다이내믹한 **오로라 그라데이션 애니메이션**을 적용하여 시각적인 만족감과 실용성을 동시에 잡은 프리미엄 메모 애플리케이션입니다.

## 🌟 주요 특징 (Key Features)

### 1. 프리미엄 UI/UX 디자인
- **Aurora Flow Background**: CSS `@keyframes`를 활용해 깊은 미드나잇 블루 배경 위에 은은하게 움직이는 오로라 그라데이션 효과를 구현했습니다.
- **Glassmorphism UI**: 배경이 은은하게 비치는 반투명 유리 질감의 카드 레이아웃을 통해 세련되고 현대적인 느낌을 제공합니다.
- **Micro-animations**: 버튼 호버 시 부드러운 네온 글로우(Glow)와 내부 샤인 효과, 메모 카드 생성/삭제 시 스무스한 트랜지션을 지원합니다.
- **Google Fonts**: `Plus Jakarta Sans`와 `Noto Sans KR` 조합으로 가독성과 미학을 동시에 만족하는 아름다운 타이포그래피를 제공합니다.

### 2. 다이내믹 메모 대시보드
- **포인트 컬러 커스터마이징**: 라벤더(Lavender), 민트(Mint), 로즈(Rose), 골드(Gold) 등 4가지 감성적인 컬러 중 하나를 선택해 나만의 다채로운 메모 카드를 작성할 수 있습니다.
- **글자 수 실시간 인디케이터**: 입력 폼에 텍스트를 작성할 때마다 실시간으로 글자 수를 계산하여 화면에 표시합니다.
- **타임스탬프 지원**: 각 메모가 언제 작성되었는지 정확한 시각 정보(`YYYY.MM.DD HH:mm`)를 함께 저장하고 예쁘게 파싱하여 보여줍니다.
- **세련된 조작 아이콘**: 고해상도 인라인 SVG 아이콘을 사용해 텍스트 복사 및 삭제 기능을 제공합니다.
- **토스트(Toast) 팝업 알림**: 메모 복사 성공 시 화면 하단에서 미려하게 떠오르는 토스트 알림을 통해 직관적인 피드백을 줍니다.

### 3. LocalStorage 기반 영속성 및 호환성
- 별도의 백엔드 데이터베이스 없이 브라우저의 `LocalStorage`를 활용하여 메모 데이터를 빠르고 안전하게 보관합니다.
- 기존의 단순 텍스트 기반 메모 데이터 구조와 완벽히 호환되도록 설계되어, 데이터 손실 없이 구버전 메모도 매끄럽게 렌더링됩니다.

---

## 🛠 기술 스택 (Tech Stack)

- **Markup**: HTML5
- **Style**: CSS3 (Glassmorphism, CSS Animations, CSS Grid & Flexbox)
- **Logic**: JavaScript (ES6+, DOM Manipulation, LocalStorage API)
- **Typography**: Google Fonts
- **Assets**: Inline SVG Icons

---

## 🚀 실행 방법 (How to run)

본 프로젝트는 별도의 서버 구축이나 빌드 과정이 필요 없는 순수 바닐라 웹 프로젝트입니다.

1. 프로젝트 폴더 내에 있는 `index.html` 파일을 크롬(Chrome), 사파리(Safari) 등 최신 웹 브라우저로 엽니다.
2. 메인 인트로 화면에서 멋진 오로라 애니메이션을 감상한 뒤 **"메모 작성하러 가기"** 버튼을 클릭합니다.
3. 메모 대시보드에서 마음껏 생각과 영감을 기록하고 관리해 보세요!

---

> **Copyright (C) 2026 DINKI'ssTyle. All rights reserved.**
> Created by DINKIssTyle
