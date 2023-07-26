// using async await

const promiseOne = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      console.log("promise one executed!");
      resolve("promise one is resolved!");
    }, 1000);
  } else {
    reject("error");
  }
});

const promiseTwo = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      console.log("promise two executed!");
      resolve("promise two is resolved!");
    }, 4000);
  } else {
    reject("error");
  }
});

const promiseCall = async () => {
  const resOne = await promiseOne;
  const resTwo = await promiseTwo;
  console.log(resOne);
  console.log(resTwo);
  console.log("promise two function call end!");
};

promiseCall();
