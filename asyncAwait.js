const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolve succesfully");
  }, 10000);
});

async function handlePromise() {
  console.log("HEYYYYYYYYYYYYY");
  const val = await p;
  console.log(val);
  console.log("Namaste Javascript");
}

handlePromise();

// function getData(){
//     p.then((res) => console.log(res));
//     console.log("Hello");
// };
// getData();
