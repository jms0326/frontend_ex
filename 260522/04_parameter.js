// 매개변수, 모수 (paramter) <- 값 : 인자, 인수 (arguments)

function f1(a, b, c) {
  console.log(a * 2, b * 2, c * 2);
}

f1(); // 아무것도 안넣어도 작동을 한다
f1(1, 2); // 일부만 넣어도 작동을 한다 (앞에서부터)
f1(1, 2, 3, 4); // 넘치게 넣어도 작동을 한다 (무시할 뿐이다)

function f2(a = 120, b = 150) {
  return a * b;
}
console.log(f2()); // 18000
console.log(f2(100)); // 15000

function f3(a = 100) {
  console.log(arguments);
}

f3();
f3(1, 2, 3, 4, 5);

function f4(a, ...b) {
  // rest, 나머지 연산자
  console.log("a", a);
  console.log("b", b);
}

f4(1);
f4(1, 2);
f4(1, 2, 3, 4, 5, 6, 7);
// Console.log(...data: any[]): void

function f5(props) {
  // DTO, VO -> TS : Interface
  // {a: ?, b: ?, c: ?}
  if (props.a) {
    console.log("props.a", props.a);
  }
  console.log("props.b", props.b || "없음");
  console.log("props.c", props.c);
}
// TypeError: Cannot read properties of undefined (reading 'a')
// f5(); // {} / undefined -> x
f5({});
f5({ a: 10 });
