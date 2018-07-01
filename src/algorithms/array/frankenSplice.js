// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

const frankenSplice = (arr1, arr2, index) => {
    // console.log(arr1)
    // const newArr = [...arr1, arr2[arr2.length-1]]
    // newArr.splice(0, 0, ...arr2.filter((el, i) => i !== arr2.length-1))
    // return newArr
    const updatedArr = [...arr2, ...arr1];
    updatedArr.splice(arr2.length, 0, arr2.length + arr1.length);
    return updatedArr
};

// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3], [4,5], 1));