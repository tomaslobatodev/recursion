//not recursive
function fibs(n) {
  const result = [0, 1]
  n = n - 2

  for (let i = n; i > 0; i--) {
    lastItem = result.length - 1
    result.push(result[lastItem] + result[lastItem - 1])
  }

  return result
}

console.log("fibs (not recursive) input = 6", fibs(10))

//recursive
function fibsRecursive(n, array = []) {
  if (n <= 0) {
    return array;
  }

  if (array.length === 0) {
    array.push(0);
  } else if (array.length === 1) {
    array.push(1);
  } else {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }

  return fibsRecursive(n - 1, array);
}

console.log("fibs (recursive) input = 10", fibsRecursive(10));