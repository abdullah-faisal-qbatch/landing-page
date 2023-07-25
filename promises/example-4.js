// Types of Promises

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 300, "resolved");
// }); //will be resolved after 300ms

// const promise2 = 93;

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "resolved2");
// }); // will be resolved after 100ms

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(promise1);
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// if any is rejected

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 300, "rejected");
// }); //will be resolved after 300ms

// const promise2 = 93;

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "rejected");
// }); // will be resolved after 100ms

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(promise1);
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log("error");
//     console.log(err);
//   });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "resolved");
}); //will be resolved after 300ms

const promise2 = 93;

const promise3 = new Promise(async (resolve, reject) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  setTimeout(resolve, 100, "resolved");
}); // will be resolved after 100ms

myFunction = async () => {
  await Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
      console.log("Inside Function");
      console.log("All resolved!");
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    });
  console.log("Here");
};

myFunction();
console.log("Outside Function!");
