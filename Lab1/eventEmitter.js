import {EventEmitter} from "node:events";

const login = (name) => {
    console.log(`${name} logged in`);
};

const start = () => {
    console.log("App started");
};

const working = (name) => {
    console.log(`${name} add items to cart`);
};
 
const checkout = (name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.on("greet", login);
task.emit("greet", "Alisha");


login("Alisha");
start();
working("Alisha");
checkout("Alisha");