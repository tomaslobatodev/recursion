const mergeSort = (array) => {
  if (array.length <= 1) return array

  const midPoint = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, midPoint))
  const right = mergeSort(array.slice(midPoint))
  return merge(left, right)
}

const merge = (left, right) => {
  const mergedArray = []

  while (left.length > 0 && right.length > 0) {
    const smallerArray = left[0] < right[0] ? left : right
    const mergeElement = smallerArray.shift()
    mergedArray.push(mergeElement)
  }

  return mergedArray.concat(left, right)
}

console.log(mergeSort([3, 2, 1, 4, 6, 5, 8, 7, 0, 9]))
