/*
복수의 if 조건문은 switch문으로 바꿀 수 있습니다.
switch문을 사용한 비교법은 특정 변수를 다양한 상황에서 비교할 수 있게 해줍니다. 코드 자체가 비교 상황을 잘 설명한다는 장점도 있습니다.
switch문은 하나 이상의 case문으로 구성됩니다. 대개 default문도 있지만, 이는 필수는 아닙니다.
*/
let a = 2 + 2;

switch (a) {
  case 3:
    alert("비교하려는 값보다 작습니다.");
    break;
  case 4:
    alert("비교하려는 값과 일치합니다.");
    break;
  case 5:
    alert("비교하려는 값보다 큽니다.");
    break;
  default:
    alert("어떤 값인지 파악이 되지 않습니다.");
}

let b = 3;

switch (b) {
  case 4:
    alert("계산이 맞습니다!");
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert("계산이 틀립니다!");
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert("계산 결과가 이상하네요.");
}
