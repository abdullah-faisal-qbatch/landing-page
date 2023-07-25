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
  const resOne = promiseOne
    .then((resOne) => {
      console.log(resOne);
      return resOne;
    })
    .catch((err) => {
      console.log(err);
    });

  const resTwo = promiseTwo
    .then((resTwo) => {
      console.log(resTwo);
      return resTwo;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("promise two function call end!");
};

promiseCall();
