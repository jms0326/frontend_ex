// if

const age = 15;
// true, false
if (age >= 13) // 조건식
{
  console.log("중학생이다");
}

const score = Math.random() * 100; // Math.random() : 0보다 크거나 1보다 작은 숫자
console.log(score);

if (score >= 90) {
  console.log("합격");
}
// if (score < 90) {
else {
  console.log("불합격");
}

// if (score >= 80) {
//   console.log("A");
// }
// if (score >= 60) {
//   console.log("B");
// }
// if (score >= 40) {
//   console.log("C");
// }
// if (score < 40) {
//   console.log("D");
// }
// else if -> 앞의 조건을 달성하면 뒤의 조건으로 인한 실행은 무시
if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 40) {
  console.log("C");
} else {
  console.log("D");
}

// truthy, falsy
// 1. 조건문의 조건식 if (***) / 삼항연산자의 조건식 ( *** ? . : .)
// 2. 논리연산자 (!, &&, ||)

// 1. 비어있거나 정의되어있지 않다 면 false다
//  - 길이(length)가 0이거나, null/undefined 같이 비어있음/정의되지 않음 -> false
// 2. 배열. 객체. 1개 이상의 문자를 포함한 문자열. 0이 아닌 모든 숫자는 true다.
// Boolean()
// ! (not) -> !! (그저 boolean으로 변경된 값)
console.log(!!1); // true
console.log(!!-1); // true
console.log(!!0); // false
console.log(!![]); // true (JS)
console.log(!!{}); // true (JS)
console.log(!!""); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!"0"); // true (아예 비지 않은 문자열)
console.log(!!("0" * 1)); // "0" * 1 => 0 => false

// let a;
let a = 10;
a || console.log("a는 false 취급");
