// Map
// 1. Map Vs Object
const o = {};
o.a = "a";
o.b = "b";
o["c d"] = "c d";
// k, v -> 호출할 수 있는 이름 => 값
o["e"] = function () {
  console.log("e");
};
// 숫자를 넣으면 배열로 인식된다든가
// for (const v of o) {
// }
// TypeError: o is not iterable - 컬렉션이 아니다
// 1. 효율적이지도 않고
// 2. KV라는 목적에 충실하지도 않다
console.log(o);
const map = new Map(); // new - 생성자 -> Map()
// 데이터를 관리하는 여러 함수들 내장
// map.get, set, has...

// 왜 별도의 Map이 JavaScript에서 필요하게 되었는가? (Object로 충분하지 않나?)
o["aa"] = 1234;
// 객체명[프로퍼티명(리터럴 - 타자형태로 쳐서 표현할 수 있는 값)] = 값
o.bb = 12345; // 식별자 규칙을 위반하지 않는 (공백, 특수문자) 표현의 경우에는 변수처럼 바로 작성할 수 있음 (객체명.프로퍼티명)

// map은 set이라는 전용 함수로 처리
// map.set(키, 값)
map.set("aa", 1234);
map.set("bb", 12345);

// CRUD <- 다 거침

console.log(o["aa"], o.aa);
console.log(map.get("aa")); // 세팅할 값이 없으니까
// map.get(호출하려는 키)

// 객체에서 특정한 프로퍼티가 포함되었는지 'in'으로 검사
console.log(`"aa" in o`, "aa" in o);
console.log(`"cc" in o`, "cc" in o);
// 특정한 키의 포함 여부
console.log(map.has("aa"));
console.log(map.has("cc"));
// key - map 연결시킨다
console.log(map);
for (const c of map) {
  // 변환과정 등을 거치지 않아도
  // iterable하다
}

/*
// =================================================================
console.log("👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉");
// =================================================================

// 3. 맵 (Map) & 셋 (Set) 자료 구조 실습
// =================================================================
// 💡 실행 방법: node 144-1-3_maps_sets.js
// =================================================================

console.log("==================================================");
console.log("👉 3. Map 키-값 컬렉션 제어 및 Set 중복 원소 제거");
console.log("==================================================");

// [미션 1] Map 객체 다루기
const memberMap = new Map();

// TODO 1-1: set을 활용해 id_01: "김철수", id_02: "이영희" 정보를 추가하세요.
memberMap.set("id_01", "김철수");
memberMap.set("id_02", "이영희");

// TODO 1-2: get을 사용해 "id_01" 회원의 이름을 출력하세요.
console.log(" 3-1. id_01 회원 이름:", memberMap.get("id_01")); // "김철수"

// TODO 1-3: size를 활용해 현재 등록된 회원 총인원을 출력하세요.
console.log(" 3-2. 현재 총 회원 수:", memberMap.size); // 2

// TODO 1-4: delete를 사용하여 "id_02" 회원을 영구 삭제하세요.
memberMap.delete("id_02");
console.log(" 3-3. id_02 회원 존재 여부:", memberMap.has("id_02")); // false

// [추가 연습 3-1] 객체(Object)를 Key로 사용하는 고급 Map 활용 실습
// 1. 객체 keyObj = { code: 101 } 생성
// 2. productMap을 새로 선언하여 keyObj를 Key로 하고 값으로 "프리미엄 노트북"을 바인딩하세요.
// 3. get 메서드로 해당 상품명을 안전하게 추출해 보세요.
const keyObj = { code: 101 };
const productMap = new Map();
productMap.set(keyObj, "프리미엄 노트북");
console.log(" 3-4. 객체 키 기반 조회 결과:", productMap.get(keyObj)); // "프리미엄 노트북"

console.log("--------------------------------------------------");

// [미션 2] Set 객체 다루기 및 배열 중복 요소 제거 원스톱 트릭
const colorSet = new Set();

// TODO 2-1: add를 이용하여 "Red", "Blue", "Red" 순서로 저장하세요.
colorSet.add("Red");
colorSet.add("Blue");
colorSet.add("Red"); // 중복 삽입 시도

console.log(" 3-5. Set의 총 요소 개수(중복 제외):", colorSet.size); // 2 (Red 중복 제외)

// [추가 연습 3-2] 배열 중복 원소 일괄 정화 미션
// 아래 duplicateScores 배열의 우글거리는 중복 점수들을 Set과 스프레드 연산자(...)를 사용해 단 한 줄로 깔끔하게 중복이 필터링된 배열로 만드세요.
const duplicateScores = [90, 80, 90, 100, 80, 70];
const uniqueScores = [...new Set(duplicateScores)];
console.log(" 3-6. 중복이 전격 청소된 유니크 배열:", uniqueScores); // [90, 80, 100, 70]
console.log("==================================================");
*/
