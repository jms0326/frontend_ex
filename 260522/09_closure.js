// 렉시컬 스코프
const v = "global";

function f() {
  // lexical : 어휘의, 어휘적 -> 작성된 시점에 결정
  // 스코프가 정의된다음 유지된다 -> 정적이다 -> static scope
  // 선언된 시점에 따라 스코프가 결정
  console.log(v);
}
f();

function f2() {
  const v = "local";
  f();
}

f2();

function f3() {
  let c = 0;
  return function () {
    return ++c;
  };
}

f3(); // function() {}
f3()(); // ***
const counter = f3(); // -> 함수 표현식
console.log(counter()); // 1
console.log(counter()); // 2
// 자바스크립트는 접근제어자가 없다 - 모듈에 있는 값, 함수등을 격리할 수 없음.
// 다 접근 가능하다 -> only 클로저

// -> 버튼 구현할 때 '상태 관리'
