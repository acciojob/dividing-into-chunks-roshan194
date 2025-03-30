const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let temp = [];
  let currentSum = 0;
  n = Number(n); // Convert input to a number

  for (let num of arr) {
    if (currentSum + num > n) {
      result.push(temp);
      temp = [];
      currentSum = 0;
    }
    temp.push(num);
    currentSum += num;
  }

  if (temp.length > 0) {
    result.push(temp);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
