const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 300, "rejected");
}); //will be resolved after 300ms

const promise2 = 93;

const promise3 = new Promise(async (resolve, reject) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  setTimeout(reject, 100, "rejected");
}); // will be resolved after 100ms

myFunction = async () => {
  await Promise.any([promise1, promise3])
    .then((value) => {
      console.log(value);
      console.log("Inside Function");
      console.log("Two resolved!");
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    });
  console.log("Here");
};

myFunction();
console.log("Outside Function!");
