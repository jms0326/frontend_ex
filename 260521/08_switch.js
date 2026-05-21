const fruit = "사과";
const fruits = ["사과", "배", "오이"];

// 0(포함) ~ 1(제외) => 0(포함) ~ 길이(제외) => 0 ~ 2.999999 => Math.floor (내림 -> 소수점 제거)
// => 0, 1, 2
// switch (fruit) {
// enum -> 값(리터럴)의 목록. a, b, c. 사과, 배, 포도.
const fruitIdx = Math.floor(Math.random() * fruits.length);
switch (fruits[fruitIdx]) {
  case "사과": // fall through
    console.log("사과 좋아요");
    // 하나의 조건을 충족을 하면 그 이후로는 case 를 검사하지 않고 모두 실행
    break;
  case "배":
    console.log("배 싫어요");
    break;
  default:
    console.log("과일을 좀 드세요");
    break;
}

// 1. switch (true)
const r = Math.random() * 10;
const r2 = Math.random() * 10;

// 이럴 거면 if else는 쓰는게 낫지 않나?
switch (
  true // 이거랑 일치하는게 아니라 뒤에 오는 조건식으로 switch를 쓰겠다
) {
  case r > 9:
    console.log("r1이 9보다 큽니다");
    break;
  case r2 > 9:
    console.log("r2가 9보다 큽니다");
    break;
  default:
    console.log("둘다 9보다 작습니다");
}

// 2. 객체 - 키 호출
const fruits2 = ["사과", "배", "오이"];
const o = {
  사과: "사과 좋아요",
  배: "배 싫어요",
};
const fruitIdx2 = Math.floor(Math.random() * fruits2.length);
const fruitKey = fruits2[fruitIdx2];
// 없는 키를 호출하면 undefined -> false
console.log(fruitKey, o[fruitKey] || "과일을 좀 드세요");
// || 를 default로 쓸 수 있음.
console.log(fruitKey, o[fruitKey] ?? "과일을 좀 드세요");
// ?? : null, undefined일 때 뒤에오는 값으로 표시
