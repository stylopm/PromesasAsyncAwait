let saludar = new Promise((resolve, reject) => {
  resolve("Hola mundo. Soy llamado desde una promesa");
});

console.log("****************");
saludar.then((value) => {
  setTimeout(() => {
    console.log(value);
  }, 3000);
});
console.log("----------------");
