/*
    자바스크립트에서 값은 항상 문자열이나 숫자형 같은 특정한 자료형에 속합니다.
    자바스크립트에는 여덟 가지 기본 자료형이 있습니다. => 데이터 타입과 자료형은 다른 말임.
 */

// 자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있습니다. 따라서 변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있습니다.
let message = "hello";
message = 123456;

// 숫자형
let num = 1;
num = 12.3;
num = Infinitys;

// 내부 표현 방식 때문에 자바스크립트에선 (253-1)(9007199254740991) 보다 큰 값 혹은 -(253-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.
// BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.
const bigInt = 1234567890123456789012345678901234567890n;

// 문자형
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;
let name = "John";
// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); // Hello, John!
// 표현식을 문자열 중간에 삽입
alert(`the result is ${1 + 2}`); // the result is 3

// 불린형
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = !ageFieldChecked; // 아니요, age field를 확인하지 않았습니다(not checked)

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)

/*
자바스크립트에는 여덟 가지 기본 자료형이 있습니다.

숫자형 – 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용합니다. 정수의 한계는 ±253 입니다.
bigint – 길이 제약 없이 정수를 나타낼 수 있습니다.
문자형 – 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용합니다. 단일 문자를 나타내는 별도의 자료형은 없습니다.
불린형 – true, false를 나타낼 때 사용합니다.
null – null 값만을 위한 독립 자료형입니다. null은 알 수 없는 값을 나타냅니다.
undefined – undefined 값만을 위한 독립 자료형입니다. undefined는 할당되지 않은 값을 나타냅니다.
객체형 – 복잡한 데이터 구조를 표현할 때 사용합니다.
심볼형 – 객체의 고유 식별자를 만들 때 사용합니다.
typeof 연산자는 피연산자의 자료형을 알려줍니다.

typeof x 또는 typeof(x) 형태로 사용합니다.
피연산자의 자료형을 문자열 형태로 반환합니다.
null의 typeof 연산은 "object"인데, 이는 언어상 오류입니다. null은 객체가 아닙니다.
 */
