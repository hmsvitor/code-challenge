var sum_to_n_a = function (n) {
  let result = 0;
  let x = 1;
  while (x <= n) {
    result += x;
    x++;
  }

  return result;
};

var sum_to_n_b = function (n) {
  let result = 0;
  for (let x = 1; x <= n; x++) {
    result += x;
  }

  return result;
};

var sum_to_n_c = function (n) {
  let result = 0;
  do {
    result += n;
    n--;
  } while (n >= 1);

  return result;
};

console.log("sum_to_n_a: ", sum_to_n_a(5));
console.log("sum_to_n_b: ", sum_to_n_b(5));
console.log("sum_to_n_c: ", sum_to_n_c(5));
