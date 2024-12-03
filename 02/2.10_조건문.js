// if와 '?'를 사용한 조건 처리

let year = prompt("ECMAScript-2015 명세는 몇 년도에 출판되었을까요?", "");
if (year == 2015) alert("정답입니다!");

if (year == 2015) {
  alert("정답입니다!");
  alert("아주 똑똑하시네요!");
}

if (0) {
  // 0은 falsy입니다.
  console.log("0은 falsy입니다.");
}

let cond = year == 2015; // 동등 비교를 통해 true/false 여부를 결정합니다.

if (cond) {
  return;
}

// if문엔 else 절을 붙일 수 있습니다. else 뒤에 이어지는 코드 블록은 조건이 거짓일 때 실행됩니다.

let year2 = prompt("ECMAScript-2015 명세는 몇 년도에 출판되었을까요?", "");

if (year2 == 2015) {
  alert("정답입니다!");
} else {
  alert("오답입니다!"); // 2015 이외의 값을 입력한 경우
}

// 'else if’로 복수 조건 처리하기
let year3 = prompt("ECMAScript-2015 명세는 몇 년도에 출판되었을까요?", "");

if (year3 < 2015) {
  alert("숫자를 좀 더 올려보세요.");
} else if (year > 2015) {
  alert("숫자를 좀 더 내려보세요.");
} else {
  alert("정답입니다!");
}

let accessAllowed;
let age = prompt("나이를 입력해 주세요.", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

let result = condition ? value1 : value2;
accessAllowed = age > 18 ? true : false;

let age2 = prompt("나이를 입력해주세요.", 18);

let message =
  age2 < 3
    ? "아기야 안녕?"
    : age < 18
    ? "안녕!"
    : age < 100
    ? "환영합니다!"
    : "나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!";

alert(message);
