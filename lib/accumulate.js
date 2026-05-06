function accumulate(list, accumulator) {
  return list.map(accumulator);
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const squares = accumulate(numbers, (n) => n ** 2);

console.log(squares); // [1, 4, 9, 16, 25]

module.exports = accumulate;
