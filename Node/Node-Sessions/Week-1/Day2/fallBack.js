function fetchData(callback) {
  setTimeout(() => {
    // Simulon nje async operation
    callback("Data received!");
  }, 10000);
}

console.log("Fetching Data ...");

fetchData((data) => {
  console.log(data);
});

console.log("Other code running");
