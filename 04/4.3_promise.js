let promise = new Promise(function (resolve, reject) {
  /* 
    resolve(value) — 일이 성공적으로 끝난 경우 그 결과를 나타내는 value와 함께 호출
    reject(error) — 에러 발생 시 에러 객체를 나타내는 error와 함께 호출

    state — 처음엔 "pending"(보류)이었다 resolve가 호출되면 "fulfilled", reject가 호출되면 "rejected"로 변합니다.
    result — 처음엔 undefined이었다 resolve(value)가 호출되면 value로, reject(error)가 호출되면 error로 변합니다.
  */
  setTimeout(() => resolve("완료"), 1000);
  resolve("완료");

  reject(new Error("…")); // 무시됨
  setTimeout(() => resolve("…")); // 무시됨
});

// .then은 프라미스에서 가장 중요하고 기본이 되는 메서드입니다.
promise.then(
  (result) => alert(result), // 1초 후 "완료!"를 출력
  (error) => alert(error) // 실행되지 않음
);

// 에러가 발생한 경우만 다루고 싶다면 .then(null, errorHandlingFunction)같이 null을 첫 번째 인수로 전달하면 됩니다. .catch(errorHandlingFunction)를 써도 되는데, .catch는 .then에 null을 전달하는 것과 동일하게 작동합니다.
promise.catch(alert); // 1초 뒤 "Error: 에러 발생!" 출력

// try {...} catch {...}에 finally 절이 있는 것처럼, 프라미스에도 finally가 있습니다. 프라미스가 처리되면(이행이나 거부) f가 항상 실행된다는 점에서 .finally(f) 호출은 .then(f, f)과 유사합니다. 쓸모가 없어진 로딩 인디케이터(loading indicator)를 멈추는 경우같이, 결과가 어떻든 마무리가 필요하면 finally가 유용합니다.
new Promise((resolve, reject) => {
  /* 시간이 걸리는 어떤 일을 수행하고, 그 후 resolve, reject를 호출함 */
});
// 성공·실패 여부와 상관없이 프라미스가 처리되면 실행됨
// .finally(() => 로딩 인디케이터 중지)
// .then(result => result와 err 보여줌 => error 보여줌)
