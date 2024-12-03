// 자바스크립트엔 세 종류의 논리 연산자 ||(OR), &&(AND), !(NOT)이 있습니다.

// ‘OR’ 연산자는 두 개의 수직선 기호로 만들 수 있습니다.

let result = a || b;
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

if (1 || 0) {
  // if( true || false ) 와 동일하게 동작합니다.
  alert("truthy!");
}
let hour = 9;

if (hour < 10 || hour > 18) {
  alert("영업시간이 아닙니다.");
}
let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
  alert("영업시간이 아닙니다."); // 주말이기 때문임
}

/* 
가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
각 피연산자를 불린형으로 변환합니다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환합니다.
*/
result = value1 || value2 || value3;
alert(1 || 0); // 1 (1은 truthy임)
alert(null || 1); // 1 (1은 truthy임)
alert(null || 0 || 1); // 1 (1은 truthy임)
alert(undefined || null || 0); // 0 (모두 falsy이므로, 마지막 값을 반환함)

// && (AND)
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let hour3 = 12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
  alert("현재 시각은 12시 30분입니다.");
}

// if를 ||나 &&로 대체하지 마세요.

// ! (NOT)
result = !value;
alert(!true); // false
alert(!0); // true
