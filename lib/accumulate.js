function accumulate(list, accumulator) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(accumulator(list[i], i, list));
  }
  return result;
}
console.log(accumulate([1,2,3], x => x * x));

module.exports = accumulate;
