const milisegundo = 2000;

const saludar = (message) => {
    setTimeout(() => {
        console.log(message.toUpperCase());
    }, milisegundo);
}

const example = () => {
    saludar('Hola a todos');
};

console.log("Final");
example();
