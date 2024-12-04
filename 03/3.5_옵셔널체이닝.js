// 옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.
let user = {}; // 주소 정보가 없는 사용자
alert(user.address.street); // TypeError: Cannot read property 'street' of undefined
let html = document.querySelector(".my-element").innerHTML; // querySelector(...) 호출 결과가 null인 경우 에러 발생

// 명세서에 ?.이 추가되기 전엔 이런 문제들을 해결하기 위해 && 연산자를 사용하곤 했습니다.

alert(user && user.address && user.address.street); // undefined, 에러가 발생하지 않습니다.
/*
?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.

설명이 장황해지지 않도록 지금부턴 평가후 결과가 null이나 undefined가 아닌 경우엔 값이 ‘있다’ 혹은 '존재한다’라고 표현하겠습니다.

이제 옵셔널 체이닝을 사용해 user.address.street에 안전하게 접근해봅시다.

*/

alert(user?.address); // undefined
alert(user?.address.street); // undefined

/*
?.는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.

사용자 주소를 다루는 위 예시에서 논리상 user는 반드시 있어야 하는데 address는 필수값이 아닙니다. 그러니 user.address?.street를 사용하는 것이 바람직합니다.

*/
