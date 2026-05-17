function accumulate(collection, operation) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    result.push(operation(collection[i]));
  }

  return result;
}

module.exports = accumulate;