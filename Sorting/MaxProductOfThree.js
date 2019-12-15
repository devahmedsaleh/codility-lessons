function solution(A) {
  const length = A.length;

  A.sort((a, b) => a - b);

  return Math.max(
    A[0] * A[1] * A[2],
    A[0] * A[1] * A[length - 1],
    A[length - 1] * A[length - 2] * A[length - 3]
  );
}
