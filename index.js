function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbers = {};

  for (const number of array) {
    //n steps
    const sumPair = target - number;
    if (sumPair in numbers) return true;
    numbers[number] = true;

  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

Quadratic time O(n^2) : given an input array of n elements, the worst case scenario]
is that the algorithm needs to take n^2 iterations.

*/

/* 
  Add your pseudocode here

declare a function hasTargetSum that takes 2 arguments(array, target)
iterate through items in array
  if any pair items add up to target
    return true
  else
    return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
