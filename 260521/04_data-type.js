// JS -> 값을 분류. 적절한 대응 -> 타입(형) -> data type -> 자료형

// number -> 감싸줄 필요가 없음. '', "", {}, []...
// namespace -> 숫자로 시작하지 않는다
const int = 1;
const int2 = -1;
const float = 1.01;
console.log(typeof int);
console.log(typeof int2);
console.log(typeof float);

// boolean
const t = true; // 예약어, 키워드 'true' 변수명 쓸 수 X
const f = false;
console.log(typeof t);
console.log(typeof f);

// string - 열. 현
// 문자(1글자) -> 메모리. -> 메모리들을 연결시켜서 문자들의 집합/배열/나열 -> 문자배열 {'h', 'e', 'l', 'l', 'o'}
// 문자열 (String) -> "hello"
// JavaScript - 'h', 'Hello', -> 'hello', "hello".
const name = "윌리엄";
console.log(typeof name);

// null
const n = null;
console.log(typeof n); // object 설계 미스

// undefined
let u;
console.log(typeof u);
let u2 = undefined;
console.log(typeof u2);
let u3 = {};
console.log(typeof u3.u);

// object
let o = {}; // 주소가 저장되는 타입
console.log(typeof o);
let arr = [];
console.log(typeof arr);

// 템플릿 리터럴
const nn = "김자바";
console.log(nn + "은(는) 개발자이다");
console.log("대한민국에 사는 " + nn + "은(는) 개발자이다");
console.log(`${nn}은(는) 개발자이다`); // 변수를 직접 (문자열 연결 없이) 넣을 수 있음
console.log(`대한민국에 사는 ${nn}은(는) 개발자이다`);
console.log(`시작

엔터가 있으면 그대로 읽음
    
    끝`); // 엔터를 그대로...
