// 연산자 -> 1개 이상의 피연산자를 대상으로 변환, 계산 -> 그 결과값

// 산술연산자 (+, -, *, /, %, **)
// 숫자
console.log(30 + 7);
console.log(30 - 7);
console.log(30 * 7);
console.log(30 / 7); // 소수점 연산까지 진행
console.log(30 % 7); // 나머지 연산 -> 몫 말고 남은 나머지.
// 사칙연산 계산우선순위를 따름 (곱셈,나눗셈 먼저 -> +, -)
console.log(30 - 5 * 3);
// ()를 쓰면 우선순위를 지정할 수 있음
console.log((30 - 5) * 3);
// 참고 : 부동소수점 (java 때 설명할 것임)

// 대입/할당 연산자 <- 변수/상수에 값을 넣음
let a = 0; // = <- 연산자
a = a + 5; // 계산
// 왼쪽 변수 네임스페이스 = 새로운 값 (기존 변수에다가 무언가 계산한...)
console.log(a);
a += 10; // a = a + 10
console.log(a); // + - * / %
// JS 주요 연산자를 연습할 수 있는 연습문제를 답과 함께 10개씩 작성해줘 -> ...

// 비교연산자
// == -> =은 이미 더 중요해보이는 할당에 써버림
console.log("100 == 10", 100 == 10); // 맞으면 true, 틀리면 false
console.log("100 >= 10", 100 >= 10);
console.log("10 >= 10", 10 >= 10);
console.log("100 <= 10", 100 <= 10);
console.log("10 <= 10", 10 <= 10);
console.log("100 != 10", 100 != 10);
console.log(`"고양이" == "개"`, "고양이" == "개"); // 동등연산자
console.log(`"고양이" != "개"`, "고양이" != "개");
console.log(`"개" == "개"`, "개" == "개");
// "고양이" + "개" = "고양이개"
console.log(1 + "1"); // 11
console.log(1 + "1" * 1); // 2
// 문자와 숫자가 만나면 둘 중에 하나가 형 변환 -> +는 문자열의 연산이 있으니 숫자가 문자열로 바뀜
console.log(2 * "2"); // 4
// +를 제외한 나머지 연산들은 문자열 연산이 없으므로 숫자로 자동 변환
console.log(1 == "1"); // 1 -> "1" == "1"
// 일치 연산자 (형 변환을 하지 않는다 - 그대로 둔다)
console.log(1 === "1"); // false
console.log(1 !== "1"); // true
// truthy, falsy
console.log(0 == "0");
console.log("" == 0);
console.log("" == "0");

// 논리 연산자
// 1개 이상의 값에 대해서 논리적 평가값(true, false)을 합성, 변환하는 연산자
// &&(and), ||(or), !(not)
console.log("---------");
const b1 = 100 > 10;
console.log(b1);
console.log(!b1); // not(!) => true => false
const b2 = 50 < 20;
console.log(b2);
// b1도 true, b2도 true일 때 true => 모든 조건을 만족시켜야 true
console.log(b1 && b2); // false
// b1도 false고, b2도 false일 때 false => 모두 false여야 false
console.log(b1 || b2); // true

// ! <- 이건 이해가 감
// &&, || -> 단축연산
// || -> 맨 처음에 true. -> a || b => a가 true면 b는 신경써야함? => 무조건 true
// && -> 맨 처음이 false. -> a && b => b가? => 무조건 false
// 밥먹고 와서...
// (증감 연산자로 증명할 것이다)

// 증감 연산자
console.log("---");
let x = 1;
x++; // x += 1, x = x + 1.
console.log(x); // 2
x--; // x -= 1, x = x - 1.
console.log(x); // 1
// 앞에 붙을 수도 있고, 뒤에 붙을 수도 있음.
console.log(x++); // 2? 1! -> 2.
// x++ => 이게 호출되고 나서 대입
// x를 먼저 호출하고, ++을 처리함
console.log(++x); // 3
console.log(--x); // 2
console.log(x--); // 1? 2!
// 대입연산자 계열이지만 바로 연산에 투입 (+=, = <- 바로 출력이나 값으로 넣을 순 없음)
// 헷갈리는게 싫으면 (바깥에서 처리를 하고)
x++;
console.log(x); // 호출하는데 안넣으면 된다

console.log("---");
console.log("|| 전", x);
true || x++; // 이런식에 구문을 만들었다
console.log("|| 후", x);
console.log("|| 전", x);
false || x++; // 이런식에 구문을 만들었다
console.log("|| 후", x);

console.log("&& 전", x);
true && x++; // 이런식에 구문을 만들었다
console.log("&& 후", x);
console.log("&& 전", x);
false && x++; // 이런식에 구문을 만들었다
console.log("&& 후", x);

function login() {
  console.log("login");
  return false;
}
function session() {
  console.log("session");
}

login() && session();

// 삼항 연산자 - 일반적으로 연산자는 1~2개까지 피연산자(항)
// (true, false) ? true일때 : false일때 -> 3개
// 1 + 2 -> 1, 2 피연산자(항) 2개

const age = 20;
console.log(age >= 20 ? "음주 가능" : "음주 불가능");
console.log(age < 20 ? "미성년자" : "성인");

// && || -> 단축연산, 삼항연산자 -> react
// <컴포넌트,페이지> 리터럴 값 취급 -> 보이고 말고를 흐름제어로 하는게 아니라
// 이런 연산자들을 묶어서가지고 표현하고...
// jsx, tsx 이쪽을 좀 해보신 분들은 (조건) ? (조건 만족했을 때 이런 컴포넌트) : 아닐 때는 비워둠 혹은 이런 컴포넌트...

// 비트연산자는 일부러 안하는 것 (&& -> '&', ||)
// null처리 관련된. .? ?? 일부러 생략 (굳이?)
console.log(2 ** 3); // power 연산자 - 2 ^ 3
console.log(2 ** 0.5);
console.log(2 ** (1 / 3));
