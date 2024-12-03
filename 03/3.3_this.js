let userA = {
  name: "John",
  age: 30,
};

userA.sayHi = function () {
  alert("안녕하세요!");
};
user.sayHi(); // 안녕하세요!

/* 

함수 표현식으로 함수를 만들고, 객체 프로퍼티 user.sayHi에 함수를 할당해 주었습니다.

이제 객체에 할당된 함수를 호출하면 user가 인사를 해줍니다.

이렇게 객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.

위 예시에선 user에 할당된 sayHi가 메서드이죠.

메서드는 아래와 같이 이미 정의된 함수를 이용해서 만들 수도 있습니다.
*/
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    alert(this.name);
  },
};

user.sayHi(); // John

let user2 = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // 'this' 대신 'user'를 이용함
  },
};

/*
그런데 이렇게 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생할 수 있습니다. user를 복사해 다른 변수에 할당(admin = user)하고, user는 전혀 다른 값으로 덮어썼다고 가정해 봅시다. sayHi()는 원치 않는 값(null)을 참조할 겁니다.
 */
