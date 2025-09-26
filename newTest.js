const input = [1, 3, 6, 10];
const data = input.slice(1);
console.log(data);

const output = input.slice(1).map((num, i) => {
  console.log(num, ":", i);
  const diff = num - input[i];
  return diff * diff;
});


console.log(output); // [4, 9, 16]
