const f1 = () => {
    console.log("F1");
};
const f2 = () => {
    console.log("F2");
};
const f3 = () => {
    console.log("F3");
};

function main() {
    console.log("main");//run first
    setTimeout(f1,0);
  //  setInterval(f1,1000)
    setImmediate(f2);
   
   process.nextTick(f3);
    console.log("end");//run first
}

main();