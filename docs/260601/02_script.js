/* Created by DINKIssTyle on 2026. Copyright (C) 2026 DINKI'ssTyle. All rights reserved. */

console.log("Smart Pokédex Script Loaded.");

// DOM 요소 바인딩
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchResult = document.querySelector("#searchResult");

// 이벤트 리스너 등록
searchForm.addEventListener("submit", searchFormHandler);

// 인기 포켓몬 태그 이벤트 바인딩
const popularTags = document.querySelectorAll(".popular-tag");
popularTags.forEach(tag => {
  tag.addEventListener("click", () => {
    // 태그의 data-name 속성 값을 가져와서 인풋에 넣고 폼 전송
    const pokeName = tag.getAttribute("data-name");
    searchInput.value = pokeName;
    
    // 폼 제출 이벤트를 강제로 발생시킴
    const event = new Event('submit', { cancelable: true, bubbles: true });
    searchForm.dispatchEvent(event);
  });
});

// 한글 검색 지원을 위한 1세대 포켓몬(1~151) 딕셔너리 배열
const koPokemon1Gen = [
  "이상해씨","이상해풀","이상해꽃","파이리","리자드","리자몽","꼬부기","어니부기","거북왕","캐터피",
  "단데기","버터플","뿔충이","딱충이","독침붕","구구","피죤","피죤투","꼬렛","레트라",
  "깨비참","깨비드릴조","아보","아보크","피카츄","라이츄","모래두지","고지","니드런♀","니드리나",
  "니드퀸","니드런♂","니드리노","니드킹","삐삐","픽시","식스테일","나인테일","푸린","푸크린",
  "주뱃","골뱃","뚜벅쵸","냄새꼬","라플레시아","파라스","파라섹트","콘팡","도나리","디그다",
  "닥트리오","나옹","페르시안","고라파덕","골덕","망키","성원숭","가디","윈디","발챙이",
  "슈륙챙이","강챙이","캐이시","윤겔라","후딘","알통몬","근육몬","괴력몬","모다피","우츠동",
  "우츠보트","왕눈해","독파리","꼬마돌","데구리","딱구리","포니타","날쌩마","야돈","야도란",
  "코일","레어코일","파오리","두두","두트리오","쥬쥬","쥬레곤","질퍽이","질뻐기","셀러",
  "파르셀","고오스","고우스트","팬텀","롱스톤","슬리프","슬리퍼","크랩","킹크랩","찌리리공",
  "붐볼","아라리","나시","탕구리","텅구리","시라소몬","홍수몬","내루미","또가스","또도가스",
  "뿔카노","코뿌리","럭키","덩쿠리","캥카","쏘드라","시드라","콘치","왕콘치","별가사리",
  "아쿠스타","마임맨","스라크","루주라","에레브","마그마","쁘사이저","켄타로스","잉어킹","갸라도스",
  "라프라스","메타몽","이브이","샤미드","쥬피썬더","부스터","폴리곤","암나이트","암스타","투구",
  "투구푸스","프테라","잠만보","프리져","썬더","파이어","미뇽","신뇽","망나뇽","뮤츠","뮤"
];

async function searchFormHandler(event) {
  event.preventDefault();
  
  let query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  // 한글 입력 여부 체크 정규식
  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(query);

  if (isKorean) {
    // 1세대 배열에서 인덱스 번호를 찾음 (+1을 해야 도감 번호가 됨)
    const index = koPokemon1Gen.indexOf(query);
    if (index !== -1) {
      query = (index + 1).toString(); // 도감 번호로 변환하여 API 호출 유도
    } else {
      // 1세대가 아니거나 잘못된 이름인 경우 바로 에러 처리
      renderError("1세대(1~151) 한글 이름만 검색 가능합니다.");
      return;
    }
  }

  // 로딩 상태 UI 표시
  renderLoading();

  try {
    const pokeData = await fetchPokeData(query);
    renderPokeCard(pokeData);
  } catch (error) {
    console.error("포켓몬 검색 에러:", error);
    renderError("존재하지 않는 포켓몬이거나 일시적인 오류입니다.");
  }
}

// PokeAPI 비동기 호출 및 한국어 이름 매핑 로직
async function fetchPokeData(query) {
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${query}`;
  
  // 1. 기본 포켓몬 데이터 호출
  const response = await axios.get(apiURL);
  const data = response.data;
  
  // 2. 포켓몬 종(Species) 데이터 호출 (한국어 이름 파싱용)
  const speciesResponse = await axios.get(data.species.url);
  
  // 한국어 이름 찾기
  const koNameObj = speciesResponse.data.names.find(
    (item) => item.language.name === "ko"
  );
  
  data.koName = koNameObj ? koNameObj.name : data.name; // 한국어 이름이 없으면 영문 이름 사용
  
  return data;
}

// 로딩 화면 렌더링
function renderLoading() {
  searchResult.innerHTML = `
    <div class="loading-state">
      <div class="poke-ball-spinner"></div>
      <p>데이터를 통신 중입니다...</p>
    </div>
  `;
}

// 에러 화면 렌더링
function renderError(message) {
  searchResult.innerHTML = `
    <div class="error-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <p>${message}</p>
    </div>
  `;
}

// 스탯 최대치 정의 (프로그레스 바 퍼센트 계산용, 대략적인 기준 255)
const MAX_STAT = 255;

// 주요 포켓몬 타입별 대표 색상 맵 (배경 글로우 효과용)
const typeColors = {
  normal: '#A8A77A', fire: '#EE8130', water: '#6390F0', electric: '#F7D02C',
  grass: '#7AC74C', ice: '#96D9D6', fighting: '#C22E28', poison: '#A33EA1',
  ground: '#E2BF65', flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A',
  rock: '#B6A136', ghost: '#735797', dragon: '#6F35FC', dark: '#705898',
  steel: '#B7B7CE', fairy: '#D685AD'
};

// 성공 결과 카드 렌더링
function renderPokeCard(data) {
  // 스탯 데이터 추출
  const hp = data.stats.find(s => s.stat.name === 'hp').base_stat;
  const atk = data.stats.find(s => s.stat.name === 'attack').base_stat;
  const def = data.stats.find(s => s.stat.name === 'defense').base_stat;
  const spd = data.stats.find(s => s.stat.name === 'speed').base_stat;

  // 대표 타입 컬러 추출
  const mainType = data.types[0].type.name;
  const themeColor = typeColors[mainType] || 'rgba(255,255,255,0.1)';

  // 도감 번호 3자리 포맷팅
  const idStr = String(data.id).padStart(3, '0');
  
  // 고해상도 공식 아트워크 이미지 사용 (없을 경우 일반 스프라이트 폴백)
  const imgUrl = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;

  const html = `
    <article class="pokemon-card" style="--type-color: ${themeColor};">
      <header class="card-header">
        <span class="poke-id">#${idStr}</span>
        <div class="poke-image-container">
          <img src="${imgUrl}" alt="${data.name}" class="poke-image" />
        </div>
        <h2 class="poke-name-ko">${data.koName}</h2>
        <h3 class="poke-name-en">${data.name}</h3>
      </header>

      <section class="stats-container">
        <!-- HP -->
        <div class="stat-row stat-hp">
          <span class="stat-label">HP</span>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" style="width: ${(hp / MAX_STAT) * 100}%"></div>
          </div>
          <span class="stat-value">${hp}</span>
        </div>
        <!-- ATK -->
        <div class="stat-row stat-atk">
          <span class="stat-label">ATK</span>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" style="width: ${(atk / MAX_STAT) * 100}%"></div>
          </div>
          <span class="stat-value">${atk}</span>
        </div>
        <!-- DEF -->
        <div class="stat-row stat-def">
          <span class="stat-label">DEF</span>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" style="width: ${(def / MAX_STAT) * 100}%"></div>
          </div>
          <span class="stat-value">${def}</span>
        </div>
        <!-- SPD -->
        <div class="stat-row stat-spd">
          <span class="stat-label">SPD</span>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" style="width: ${(spd / MAX_STAT) * 100}%"></div>
          </div>
          <span class="stat-value">${spd}</span>
        </div>
      </section>

      <footer class="audio-controls">
        <button class="cry-btn" id="playCryBtn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
          울음소리 듣기
        </button>
      </footer>
    </article>
  `;

  searchResult.innerHTML = html;

  // 오디오 플레이 로직 바인딩
  const playBtn = document.querySelector("#playCryBtn");
  if (playBtn && data.cries && data.cries.latest) {
    const audio = new Audio(data.cries.latest);
    playBtn.addEventListener("click", () => {
      audio.volume = 0.5;
      audio.play();
      
      // 버튼 애니메이션 (재생 중일 때 효과 부여 가능)
      playBtn.style.transform = "scale(0.95)";
      setTimeout(() => { playBtn.style.transform = "scale(1)"; }, 150);
    });
  } else {
    // 오디오 파일이 없는 경우 예외 처리
    playBtn.style.opacity = "0.5";
    playBtn.style.cursor = "not-allowed";
    playBtn.innerHTML = "울음소리 없음";
  }
}
