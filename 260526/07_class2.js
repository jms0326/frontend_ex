// 상속
class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
  speak() {
    console.log(this.#name);
  }
}
class Cat extends Animal {
  // 이미 기존에 구현해놓은 클래스를 써서 일부 내용을 공유하는 신규 클래스를 만드는 것
  #age;
  constructor(name, age) {
    // 냅두면 상속받은 원래 출처의 생성자가 기본으로 활성화
    // 우리가 직접 생성자를 만들면 그게 새로운게.
    // 상속 받은 직전 클래스
    // private -> 상속을 받아도 그 속성에 접근할 수 X.
    super(name);
    this.#age = age;
  }
  speak() {
    super.speak(); // 직전 상속 받은 원본의 것을 super로 쓰면서
    console.log(`나는 ${this.#age}살이다옹`); // 새로운 내용을 추가
  }
}
const a = new Animal("기니피그");
const b = new Cat("나폴레옹");
const c = new Cat("비스마르크", 50);
a.speak();
b.speak();
c.speak();
