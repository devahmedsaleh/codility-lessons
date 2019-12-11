//https://app.codility.com/programmers/lessons/6-sorting/triangle/

function solution(A) {
  const length = A.length;
  const range = length - 2;

  A.sort((a, b) => a - b);

  for (let i = 0; i < range; i++) {
    const P = A[i];
    const Q = A[i + 1];
    const R = A[i + 2];

    if (P + Q > R) return 1;
  }

  return 0;
}
