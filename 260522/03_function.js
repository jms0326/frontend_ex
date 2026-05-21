// let, const, (var)

let a = 0;
function myFun() {
  console.log(a);
  a++;
  let b = "나는 함수 안에서 선언된 변수다";
  // return undefined
  return b;
}
myFun();
console.log(a);
// console.log(b); // ReferenceError: b is not defined
console.log(myFun());
const c = myFun();
console.log(c);
function myFun2(a) {
  //   let a = 0; // SyntaxError: Identifier 'a' has already been declared
  {
    let a = 1000;
    console.log(a);
  } // block을 새로 가면 let은 새롭게 만들 수 있음 -> 밖으로 못나감
  return a * 2; // 2? 200?
}
console.log(myFun2(100)); // 매개변수가 더 가까이 있어서
// 블록 외부에 있는 네임스페이스 -> 매개변수/내부에서 선언

function myFun3() {
  const r = Math.random();
  switch (true) {
    case r > 0.9:
      return [1, 2, 5];
    case r > 0.5:
      return { a: 10 };
    default:
      return "동전던지기 실패";
  }
  //   if (r > 0.5) {
  //     return [1, 2, 3]; // 출력만의 의미를 가지는 건 아님
  //     // 여기서 함수 로직 종료
  //     // 특정 함수 블록의 break 역할 다만 평가되는 값을 알려주는...
  //   }
  //   // else 역할을 하게 된다
  //   return { a: 1, b: 2, c: 3 };
  //   // else도 안쓰고 switch도 안쓰고 함수화한다음에 if -> return
}
console.log(myFun3());
