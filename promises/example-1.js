const abc = new Promise((resolve, reject) => {
  if (1 == 2) {
    resolve("promise is resolved!");
  } else {
    setTimeout(() => {
      console.log("promise executed!");
    }, 3000);
    reject("Error");
  }
});

console.log(abc);

const testFunction = () => {
  abc
    .then(function () {
      console.log("successfully returned!");
    })
    .catch(function () {
      console.log("not successfully returned!");
    });

  console.log("test function end!");
};

testFunction();

// Output

// Promise { 'promise is resolved!' }
// test function end!
// successfully returned!
// (After waiting for 3 seconds!)
// promise executed!
