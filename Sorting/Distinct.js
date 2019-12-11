// https://app.codility.com/programmers/lessons/6-sorting/distinct/

function solution(A) {
  const length = A.length;
  if (length === 0 || length === 1) return length;

  const hashSet = new Set(A);
  return hashSet.size;
}

function solution(A) {
  const length = A.length;
  if (length === 0 || length === 1) return length;

  A.sort((a, b) => a - b);

  let count = 1;
  const range = length - 1;

  for (let i = 0; i < range; i++) {
    const firstNum = A[i];
    const secondNum = A[i + 1];

    if (firstNum !== secondNum) count++;
  }
  return count;
}
