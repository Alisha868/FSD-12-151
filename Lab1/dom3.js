import { EventEmitter }from "events";

const button = new EventEmitter();

button.on("click",(uname) => {
    console.log(`Button clicked by ${uname}`);

});

button.emit("click", "Aadhaya ");
button.emit("click", "Alisha");
button.emit("click", "Aparna");
button.emit("click");
