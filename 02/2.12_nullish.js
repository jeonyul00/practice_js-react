// nullish 병합 연산자(nullish coalescing operator) ??를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있습니다.
/*
a ?? b의 평가 결과는 다음과 같습니다.
a가 null도 아니고 undefined도 아니면 a
그 외의 경우는 b
nullish 병합 연산자 ??없이 x = a ?? b와 동일한 동작을 하는 코드를 작성하면 다음과 같습니다.
*/
const x = a !== null && a !== undefined ? a : b;
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

/* 
    ||는 첫 번째 truthy 값을 반환합니다.
    ??는 첫 번째 정의된(defined) 값을 반환합니다.
*/
// ---
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

let height2 = null;
let width = null;

// 괄호를 추가!
let area = (height2 ?? 100) * (width ?? 50);

alert(area); // 5000
