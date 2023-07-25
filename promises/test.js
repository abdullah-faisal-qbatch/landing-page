function test1(params) {
  const promise = new Promise((resolve, reject) => {
    if (1) {
      setTimeout(() => {
        console.log("first");
        resolve("first");
      }, 2000);
    } else {
      reject("not ok");
    }
  });

  let data = promise;
  //   .then((response) => {
  //     setTimeout(() => {
  //       console.log(response);
  //       console.log("second");
  //     }, 2000);
  //   });

  setTimeout(() => {
    console.log(data, "Inside Function");
  }, 10000);
  return data;
}

let a = test1();
setTimeout(() => {
  console.log(a, "Outside Function");
}, 6000);
