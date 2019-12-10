// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
  let unpaired = 0;

  for (num of A) {
    unpaired ^= num;
  }

  return unpaired;
}