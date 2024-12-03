/* 
함수 선언
함수 선언(function declaration) 방식을 이용하면 함수를 만들 수 있습니다(함수 선언 방식은 함수 선언문이라고 부르기도 합니다 – 옮긴이).
*/

function showMessage2(str: string): boolean {
  console.log(str);
  return true;
}

let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage(); // Hello, John

function showMessage3(from: string, text = "no text given") {
  alert(from + ": " + text);
}

showMessage3("Ann"); // Ann: no text given
showMessage3("Ann", undefined); // Ann: no text given

function doNothing() {
  return;
}

alert(doNothing() === undefined); // true
// 함수는 동작 하나만 담당해야 합니다.
