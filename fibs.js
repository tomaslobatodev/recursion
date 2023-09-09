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

//recursive
