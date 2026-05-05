const res = require("express/lib/response");

function accumulate(list, accumulator) {
  return list.map(accumulator)
}

module.exports = accumulate;
