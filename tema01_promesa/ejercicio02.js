
let myStatus = new Promise((myResolve, myReject) => {
  let valor = 50;
  if (valor > 5) {
    myResolve('Es mayor a 5');
  } else {
    myReject('Es menor a 5');
  }
});

myStatus.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
