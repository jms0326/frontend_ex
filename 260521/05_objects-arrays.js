// 배열, 객체
// -> for -> '배열'. '객체'

const a1 = "사과";
const a2 = "배";
const a3 = "귤";
console.log(a1, a2, a3);

const fruits = ["사과", "배", "귤"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "포도"; // index는 0부터 시작한다
console.log(fruits);
console.log(fruits[0]);

console.log(fruits.length);
// array/list -> collection의 길이. 가장 마지막에 위치하는 원소(element)의 인덱스는 length - 1

// 객체 (Object)
const o = {
  키: "밸류", // 특정 값/함수의 호출에 필요한 이름 - 값.
  // 값 -> 0, "", true
  true: "123", // ,로 키-밸류 쌍을 구분
  // 네임스페이스를 넣어도 된다
  hello: "hello",
  안녕: "안녕",
  1: 100,
  "1 1": "12345",
};
// 네임스페이스 규약을 지킬 경우 (숫자로 시작하면 안되고, $_를 제외한 특수문자는 들어갈 수 없다)
console.log(o.true);
console.log(o.hello); // 문자열인데 네임스페이스에 넣어도 되는 값은 이렇게 호출해도 된다
console.log(o.안녕);
// 값을 넣었다 (공백이 포함 등등...)
console.log(o[1]); // 배열
console.log(o["1 1"]);

const arrr = [];
arrr.안녕 = "값";
console.log(arrr, arrr.안녕);
arrr[1.5] = "값2";
console.log(arrr, arrr[1.5]);
arrr[1] = "값3";
console.log(arrr);

arrr.length = 0;
console.log(arrr);
