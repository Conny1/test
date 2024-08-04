// FizzBuzz
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (powerOF2(i)) {
      console.log("POWER");
    } else {
      console.log(i);
    }
  }
}

function powerOF2(num) {
  if (!num) return false;
  if (num == 1) return true;
  if (num % 2 !== 0) return false;

  return powerOF2(num / 2);
}

// solution(16);
// fibonacci
function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0,
    b = 1,
    temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

// console.log(fibonacci(100000));
// Cheap letter delition
function letterdelete(str, cost) {
  const rep = {};
  let count = 0;
  for (const letter of str) {
    rep[count] = letter;
    count += 1;
  }
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === rep[i + 1]) {
      total += cost[i];
    }
  }
  return total;
}

// console.log(letterdelete("ababa", [10, 5, 10, 5, 10]));
