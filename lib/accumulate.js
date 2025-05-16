function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!
  // Ok
  // I am going to do this without map try to solve this using map over my solution
  const result = [];
  for (let index = 0; index < list.length; index++) {
    // calls passed in callback on list item and pushes into a new array
    result.push(accumulator(list[index]));
  }
  // return array at the end
  return result;
}

module.exports = accumulate;
