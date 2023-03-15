let arr = [1, 2, 3, 4, 5];
// Loop for
for (let i = 0; i < arr.length + 1; ++i) {
  console.log(arr[i]);
}
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

arr.forEach((element) => {
  console.log(element);
});
