async function func2() {
  console.log("HERE 3");
}

async function func1() {
  await func2();
  console.log("HERE 2");
  console.log("HERE 4");
}

async function main() {
  await func1();
  console.log("HERE 1");
  console.log("HERE 5");
}

main();
