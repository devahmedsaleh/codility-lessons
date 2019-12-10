// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
  const binary = N.toString(2);

  let currentGap = 0;
  let longestGap = 0;

  for (bit of binary) {
    if (bit == 0) currentGap++;

    else if (currentGap) {
      longestGap = Math.max(longestGap, currentGap);
      currentGap = 0;
    }
  }

  return longestGap;
}