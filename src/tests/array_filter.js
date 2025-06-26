const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [2, 3, 4]

const dif1 = arr1.filter(item => !arr2.includes(item))
const dif2 = arr1.filter(item => !dif1.includes(item))

console.log(dif1)
console.log(dif2)