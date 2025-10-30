function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const nums = [2, 4, 6, 8, 10];
console.log(sumArray(nums));
