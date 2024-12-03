let i: number = 0;

while (i < 3) {
  console.log(i);
  i++;
}

let num = 3;
while (num) {
  // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춥니다.
  alert(num);
  num--;
}

do {
  alert(i);
  i++;
} while (i < 3);

/* 
for (begin; condition; step) {
  // ... 반복문 본문 ...
}
  */
