/* 
자바스크립트에선 let 키워드를 사용해 변수를 생성합니다.
*/
let num = 1;

// 만들어진 지 오래된 스크립트에서 let 대신 var라는 키워드를 발견하는 경우가 있습니다.

// 변화하지 않는 변수를 선언할 땐, let 대신 const를 사용합니다.
const str = "test";

/*
    기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습입니다.
    이런 상수는 대문자와 밑줄로 구성된 이름으로 명명합니다.
    예시로 웹에서 사용하는 색상 표기법인 16진수 컬러 코드에 대한 상수를 한번 만들어보겠습니다.
*/
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*
'상수’는 변수의 값이 절대 변하지 않음을 의미합니다.
그중에는 (빨간색을 나타내는 16진수 값처럼) 코드가 실행되기 전에 이미 그 값을 알고 있는 상수도 있고, 런타임 과정에서 계산되지만 최초 할당 이후 값이 변하지 않는 상수도 있습니다.
 */
