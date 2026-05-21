// 변수 : 특정한 메모리에 저장되어 있는 값을 호출하기 위해서 사용하는 호칭
name = "정민석"; // "" : 문자열(텍스트)을 표현하기 위한 문법
// "" -> 이걸 안쓰면 '변수취급됨'
console.log(name);
// let 키워드
// console.log(foo); // Cannot access 'foo' before initialization
let foo; // let 변수명 -> '변수명'으로 메모리에 장소를 만들겠다 (선언 : declaration)
console.log(foo); // undefined
foo = 1; // 할당/대입 (assignment) / 정의 : definition
let bar = 10; // 선언+할당(정의) -> 초기화 (initialization)
console.log(foo); // foo <- 1
console.log(bar); // bar <- 10
// 재할당 O, 재선언 X
foo = 100;
// let foo; // Cannot redeclare block-scoped variable 'foo'.ts(2451)
console.log(foo); // foo <- 100

// const 키워드
// 초기화 -> 재할당 X
// const a; // 초기화(할당도 같이 해줘야함)
// console.log(a); // Cannot access 'a' before initialization
const a = 111;
console.log(a);
// const a = 123; // 재선언 X
// a = 222; // Assignment to constant variable.
// 1. 원주율, 자연계수 e - 변하면 안되는 값
// 2. 객체를 다룰 때. 속도/안정성
let o = { name: "min", age: 20 };
console.log(o.name);
o = 10; // 다른 값을 넣는다?
console.log(o.name); // undefined
// 변수는 재할당을 받을 수 있기 때문에 메모리상 가변적인 위치를 받음
// 상수는 재할당이 안되기 때문에 메모리상 고정적인 길이. -> 약간의 최적화 기능도 한다
// mutable, immutable ...

// var (함수 스코프) <-> let, const (블록)
// v = 1000;
// var v = 100;
// var v;

let 돈 = 100;
console.log(돈);
