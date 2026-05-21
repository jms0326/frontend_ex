// function a()
// 표현식

// 익명함수 (Anonymous function)
(function () {
  console.log("나는 존재한다");
})();

// f(); // ReferenceError: Cannot access 'f' before initialization
// 함수 표현식
const f = function (fn) {
  fn(); // 함수
  console.log("나는 존재한다 2");
};
f(function () {
  console.log("포케 먹기 싫다"); // 함수를 값으로 넣어서 실행
});

a(); // 선언 전에도
// html? script -> 언제 해석될지 모름. html에 button, onclick 속성에 js 함수. html이 먼저 등장해서 위치를 잡은다음 뒤에 script. (var, function) / hoist (감아올리기) -> let, const. function? -> let. const. 표현식 = 익명함수.
function a() {
  console.log(this);
  console.log("호이호이호이스팅");
}

// 화살표 함수 (유사 lambda)
// 하스켈, 리스프 - (스칼라...) - 클로저 - ocaml
(function () {});
// (입력) => 출력
// (입력) => {과정 return 출력}
const af = () => 0;
af();
console.log(af());
const af2 = (a) => console.log(`실행 결과 : ${a}`);
console.log(af2(1));
// a => console.log(`실행 결과 : ${a}`);
// 매개변수가 1개 있을 때는 괄호 생략 가능
const af3 = (a) => {
  // 블록을 넣어서 최종적으로 과정을 거쳐 return
  console.log(this);
  a++;
  a *= 2;
  return a;
};
console.log(af3(100));
