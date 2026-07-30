import {EventEmitter} from 'events'

const form = new EventEmitter();

form.on("submit",(uname,password) => {
    console.log(`form submitted`);
    console.log(`Username: ${uname}`);
    console.log(`user Password: ${password}`);
});

form.emit("submit","abc@abc.com","11223344");
