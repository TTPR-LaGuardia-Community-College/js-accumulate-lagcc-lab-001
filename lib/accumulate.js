const res = require("express/lib/response");

function accumulate(list, accumulator) {
  // write the code in here to make your tests pass!

  // This will store our final transformed values
  const result = [];

  // Loop through each item in the list
  for (let i = 0; i < list.length; i++) {

    // Get the current item from the list
    const currentItem = list[i];

    // Apply the accumulator function to the current item
    const transformedItem = accumulator(currentItem);

    // Add the transformed value into the result array
    result.push(transformedItem);
  }

  // After looping through everything, return the new array
  return result;
}

module.exports = accumulate;
