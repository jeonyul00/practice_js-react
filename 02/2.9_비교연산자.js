alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true
let result = 5 > 4; // 비교 결과를 변수에 할당
alert(result); // true
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true
alert("2" > 1); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
alert("01" == 1); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.
alert(true == 1); // true
alert(false == 0); // true

let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true
alert(a == b); // true!

alert("" == false); // true
alert(0 === false); // false, 피연산자의 형이 다르기 때문입니다.
alert(null === undefined); // false
alert(null == undefined); // true
alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)
