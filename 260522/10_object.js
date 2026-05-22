const program = {
  name: "부자로 만들어주는 로또 생성기",
  numbers: [],
  //   pickNumber: function () {},
  pickNumber() {
    console.log("숫자를 뽑았습니다!");
  },
  trash: "지워주세요",
};

console.log(`프로그램 이름 :${program.name}`);
console.log(`프로그램 뽑은 숫자 :${program.numbers}`);
program.pickNumber();
program.language = "JS"; // 프로퍼티 추가
program.numbers = [1, 2, 3, 5, 8, 13]; // 프로퍼티 수정
delete program.trash; // 프로퍼티 삭제 (거의 안쓰인다)
console.log(program);
// mutation -> react => 객체가 주소값을 변경하여 새로 끼워져야 변경을 인식 (react...)
// 일부만 선택해서 새로운 객체로 만드는 경우 -> 구조 분해 할당

// 유틸리티 클래스 - 특정한 타입, 상황등을 서포하기 위해서 클래스 단위로 묶은 유용한 함수/메서드들
console.log(Object.keys(program));
console.log(Object.values(program));
console.log(Object.entries(program)); // Entry. - 키/밸류 쌍
for (const k of Object.keys(program)) {
  console.log(k);
}
for (const v of Object.values(program)) {
  console.log(v);
}
// for (const e of Object.entries(program)) {
for (const [k, v] of Object.entries(program)) {
  console.log(k, v);
}
