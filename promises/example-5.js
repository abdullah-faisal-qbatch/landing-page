async function getDataHell() {
  let startingTime = new Date();
  let resOne = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((dataOne) => {
      let dataTwo = fetch(`https://jsonplaceholder.typicode.com/todos/2`)
        .then((dataThree) => {
          let dataFour = fetch(`https://jsonplaceholder.typicode.com/todos/2`)
            .then((dataFour) => {
              console.log("Time taken by HELL: ", new Date() - startingTime);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

// solution using promise

async function getData() {
  try {
    let startingTime = new Date();
    let responseOne = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    let dataOne = await responseOne.json();

    let responseTwo = await fetch(
      `https://jsonplaceholder.typicode.com/todos/2`
    );
    let dataTwo = await responseTwo.json();

    let responseThree = await fetch(
      `https://jsonplaceholder.typicode.com/todos/3`
    );
    let dataThree = await responseThree.json();

    console.log("Time taken by solution: ", new Date() - startingTime);

    // console.log(dataOne);
    // console.log(dataTwo);
    // console.log(dataThree);
  } catch (err) {
    console.log(err);
  }
}

getDataHell();
getData();
