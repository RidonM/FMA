function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("U bo buka");
    }, 2000);
  });
}

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("U bo buka");
    }, 2000);
  });
}

const response = await getData();
console.log("Response", response);
