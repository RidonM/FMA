fetch('https://httpbin.org/ip')
    .then((res) => res.json())
    .then((data) => console.log(data));