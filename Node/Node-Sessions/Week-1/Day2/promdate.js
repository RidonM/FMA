function fetchData() {
  return new Promise(() => {
    setTimeout((resolve, reject) => {
      resolve("Food Ready");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error", error);
  });
