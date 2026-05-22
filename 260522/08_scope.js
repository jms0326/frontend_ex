//// var : 함수 스코프 (함수로 만들어진 블록만이 격리)
// let, const : 블록 스코프

// 너무 밖에 있어서 누구나 접근할 수 있으면 : 전역변수 (global)
console.log(v1);
let v3 = "나는 밖 let이야";
console.log(v3);
{
  // 외부에서 접근 못하는 좁은 스코프를 가지고 있는 변수 : 지역변수 (local)
  console.log("안녕 나는 블록이야!");
  var v1 = "나는 var야"; // 호이스팅
  let v2 = "나는 let이야";
  v3 = "나는 안 let이야";
  // 반복문, 조건문, 함수, ...
}
console.log(v1);
// console.log(v2); // ReferenceError: v2 is not defined
console.log(v3);

// 블록은 블록 밖에 안에서 선언된 결과물을 전달할 수 없다
// 다만, 이미 바깥에 있는 식별자/네임스페이스/변수명/함수명에 대입하거나 해서 영향을 미칠 순 있다
// 함수 -> return.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// console.log(i); // ReferenceError: i is not defined

var vv2 = "나는 이미 나가있지";
function f1() {
  var vv1 = "나는 나갈거야";
  vv2 = "근데 잡힘";
  let l = 1;
  const c = 1;
  //   return 아니면 못나감
}
f1();
// console.log(vv1); // ReferenceError: vv1 is not defined
console.log(vv2);
// console.log(l); ReferenceError: l is not defined
// console.log(c); ReferenceError: c is not defined
