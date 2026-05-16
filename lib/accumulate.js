
'use strict';

let accumulate = function(arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }

  return result;
};

module.exports = accumulate;
