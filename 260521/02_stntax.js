// 주석 거는 단축키와 푸는 단축키가 같다

// 한 줄 주석 (ctrl-cmd + /)
// / js doc (function 배우고 나서...)

// 여러 줄 주석 (alt + shift + a)
/* 여러
줄
주석 */

// 네임스페이스 명명 규칙 (강제)
// js -> 네임스페이스 이름으로 이미 사용중인 키워드와 $_를 제외한 모든 특수문자, 공백을 사용할 수 없다
// 변수명, 상수명, 함수명, 클래스명 등...
// + 네임스페이스 -> 숫자로 시작할 수 없음

// 강제는 아닌데 모두의 약속 case
// camelCase
// your name -> 공백은 쓸 수 없음 -> yourName
// snake_case, PascalCase, kebab-case -> 각각의 프로그래밍 언어가 선호하는게 있음
// css -> kebab-case

// 키워드 - 미리 빼놓은 단어들
let; // 변수를 선언하는 키워드
// for // 반복 관련 기능을 처리하는 키워드

// 코드의 줄이 바뀐다 -> python 엔터만으로도 인식을 하지만 javascript는 인식 x
// 이 코드 줄이 끝났다 -> compiler/interpreter -> 코드해석기에서 전달
// javscript ';' -> 별 문제가 없다 싶으면 javascript ;을 알아서 붙여줌
console.log("");
// 뒤에 뭐가 올거라고 예상되는 키워드나 ()[]{} 등은 세미콜론을 알아서 붙여주지 않음 (자동 줄바꿈X)
