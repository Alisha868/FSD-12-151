import {EventEmitter} from "node:events";

const login = (name) => {
    console.log(`${name} logged in`);
};

const start = () => {
    console.log("System started");
};

const working = (name) => {
    console.log(`${name} add items to cart`);
};
 
const checkout = (name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.once("greet", start);
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);

task.once("exit", () => {
    console.log("System shutting down");
});

task.emit("greet", "Alisha");
task.emit("greet", "Angel");
task.off("greet", working);
task.emit("greet", "Aadhaya");
task.emit("exit","Manager");


login("Alisha");
start();
working("Alisha");
checkout("Alisha");