function accumulate(lists, accumulate) {
  // write the code in here to make your tests pass!
  return lists.map(accumulate);
};

  const lists=[1,2,3,4,5];
  console.log(accumulate(lists,value=>value*value));
module.exports = accumulate;
