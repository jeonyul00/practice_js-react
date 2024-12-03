/*
객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다는 것입니다.
원시값(문자열, 숫자, 불린 값)은 ‘값 그대로’ 저장·할당되고 복사되는 반면에 말이죠.
예시를 실행하면 두 개의 독립된 변수에 각각 문자열 "Hello!"가 저장됩니다.
변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장됩니다.

*/
let message = "Hello!";
let phrase = message;

let user = {
  name: "John",
};
let admin = user; // 참조값을 복사함
admin.name = "Pete"; // 'admin' 참조 값에 의해 변경됨
alert(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함
