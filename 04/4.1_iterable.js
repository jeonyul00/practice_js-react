/* 
반복 가능한(iterable, 이터러블) 객체는 배열을 일반화한 객체입니다. 이터러블 이라는 개념을 사용하면 어떤 객체에든 for..of 반복문을 적용할 수 있습니다.
배열은 대표적인 이터러블입니다. 배열 외에도 다수의 내장 객체가 반복 가능합니다. 문자열 역시 이터러블의 예입니다.
배열이 아닌 객체가 있는데, 이 객체가 어떤 것들의 컬렉션(목록, 집합 등)을 나타내고 있는 경우, for..of 문법을 적용할 수만 있다면 컬렉션을 순회하는데 유용할 겁니다. 이게 가능하도록 해봅시다.
*/

let range = {
  from: 1,
  to: 5,
};

/* 
range를 이터러블로 만들려면(for..of가 동작하도록 하려면) 객체에 Symbol.iterator(특수 내장 심볼)라는 메서드를 추가해 아래와 같은 일이 벌어지도록 해야 합니다.
for..of가 시작되자마자 for..of는 Symbol.iterator를 호출합니다(Symbol.iterator가 없으면 에러가 발생합니다). Symbol.iterator는 반드시 이터레이터(iterator, 메서드 next가 있는 객체) 를 반환해야 합니다.
이후 for..of는 반환된 객체(이터레이터)만을 대상으로 동작합니다.
for..of에 다음 값이 필요하면, for..of는 이터레이터의 next()메서드를 호출합니다.
next()의 반환 값은 {done: Boolean, value: any}와 같은 형태이어야 합니다. done=true는 반복이 종료되었음을 의미합니다. done=false일땐 value에 다음 값이 저장됩니다.

*/

// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function () {
  // Symbol.iterator는 이터레이터 객체를 반환합니다.
  // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
  return {
    current: this.from,
    last: this.to,
    // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
    next() {
      // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
