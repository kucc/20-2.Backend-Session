Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 7000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]).then((result) => {
  console.log(result);
});

// Promise.all은 모든 Promise들이 준비될 때까지 기다린다
// result의 요소는 Promise.all에 전달되는 Promise 순서와 상응한다
// 첫 번째 Promise가 가장 늦게 이행되지만 처리 결과는 배열의 첫 번째 요소로 저장된다
