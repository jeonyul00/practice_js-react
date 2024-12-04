// 'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있습니다.

/*
생성자 함수
생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다. 다만 생성자 함수는 아래 두 관례를 따릅니다.s
함수 이름의 첫 글자는 대문자로 시작합니다.
반드시 'new' 연산자를 붙여 실행합니다.
*/
function User(name: string) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)
  this.name = name;
  this.isAdmin = false;
  // return this;  (this가 암시적으로 반환됨)
}

let user6 = new User("보라");

alert(user6.name); // 보라
alert(user6.isAdmin); // false
