// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues<T extends number | string>(values: T[]) {
  if (typeof values[0] === "number") {
    let sum = 0
    values.forEach(value => {
      sum += value as number
    })
    return sum
  } else {
    let concat = ""
    values.forEach(value => {
      concat += value as string
    })
    return concat
  }
}

// Expected output:
console.log(addValues([1, 2, 3])) // 6
console.log(addValues(["Hello", " ", "World"])) // "Hello World"
