
  function accumulate(list, accumulator) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
   
    const transformedItem = accumulator(list[i]);
    
    result.push(transformedItem);
  }

  return result;
}

module.exports = accumulate;


