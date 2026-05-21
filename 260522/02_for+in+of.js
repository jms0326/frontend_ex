// for in
const arr = ["연어", "아보카도", "스테이크", "렌틸콩"];
// for (let i; ...; ...) // i++, i-- => 증감식, 변화식을 유지시키기 위해서 블록 내에서 반복
for (const key in arr) {
  // let을 써도 상관없는데 const
  console.log(key, arr[key]);
  // 호출될 때마다 새로 이 변수를 초기화해서 쓰기 때문에
}
const obj = {
  name: "윌리엄",
  job: "반찬가게 사장",
  salary: 300_000, // js -> _ 숫자 콤마 (만, 천)
};
for (const key in obj) {
  // key -> 선언되어서 들어간 순 (정렬 보장이 아님)
  console.log(key, obj[key]);
}

arr[2.8417] = "양상추";
arr[1.5] = "양배추";
for (const key in arr) {
  console.log(key, arr[key]);
}

// 외부에서 객체형 데이터 -> key가 뭐가 있는지 모름 (키가 몇천개 있음) -> 내가 원하는 키를 찾거나 특정한 데이터들을 보기 위해서 사용을 함.

// for in - key
// for of - value (key에 대응되는 obj[key] -> value)
for (const v of arr) {
  console.log(v); // 순차적인 원소를 불러오기 때문에 정수형으로 제공되지 않은 인덱스를 지는 원소값 같은 거 다 생략
}
// 일반적인 JS 객체는 그대로 for-of문에 들어갈 수 없다
// for (const v of obj) { // TypeError: obj is not iterable
// for (const v of Object.values(obj)) {
// for (const v of Object.keys(obj)) {
for (const v of Array.from(obj)) {
  console.log(v);
}
