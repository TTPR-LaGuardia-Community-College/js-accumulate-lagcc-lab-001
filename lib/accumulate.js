function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!
  const result = [];
  
  for(let i = 0; i < list.length; i++){
    result.push(accumulator(list[i]));
  }

  return result;
}

module.exports = accumulate;
