function accumulate(list, accumulator) {
    const result = [];                 // 1. Make a new empty array
    for (let i = 0; i < list.length; i++) { 
    result.push(accumulator(list[i])); // 2. Change each item with the function and add to new array
  }
  return result;                     // 3. Give back the new array
}



module.exports = accumulate;



