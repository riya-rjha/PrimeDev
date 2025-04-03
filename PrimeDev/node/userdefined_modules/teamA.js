console.log("Team A loading")
// Rest Operator
const sum = (...arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

module.exports = sum;
console.log("Team A ends ✅")