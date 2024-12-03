/*
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됩니다. 이런 과정을 "형 변환(type conversion)"이라고 합니다.
alert가 전달받은 값의 자료형과 관계없이 이를 문자열로 자동 변환하여 보여주는 것이나, 수학 관련 연산자가 전달받은 값을 숫자로 변환하는 경우가 형 변환의 대표적인 예시입니다.
*/

let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
alert(typeof value); // string

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.
alert(typeof num); // number

let age = Number("임의의 문자열 123");
alert(age); // NaN, 형 변환이 실패합니다.

alert(Boolean(1)); // 숫자 1(true)
alert(Boolean(0)); // 숫자 0(false)

alert(Boolean("hello")); // 문자열(true)
alert(Boolean("")); // 빈 문자열(false)
// 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다.
// 문자열 "0"은 true입니다.
