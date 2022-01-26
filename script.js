document.getElementById("btn1").addEventListener("click", Fibonacci);
let arr = [0, 1];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

function Fibonacci() {
  //   while (arr.length < 1000) {
  //     let result = arr[arr.length - 1] + arr[arr.length - 2];
  //     arr.push(result);
  //   }

  let result = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(result);

  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  //   }
  let lastNumber = arr[arr.length - 1];
  console.log(arr[arr.length - 1]);
  document.getElementById("box-result").innerHTML = lastNumber;
}

document.getElementById("btn2").addEventListener("click", Reset);

function Reset() {
  console.clear();
  document.getElementById("box-result").innerHTML = "";
  arr = [0, 1];
}
