import {readFile, appendFile, writeFile} from "fs/promises";

const readData = async (filename) => {
    try{
    const content = await readFile(filename, "utf-8");
    return content;
} catch (e) {
    console.log(e.message);
    console.log("File not found");
}
finally{
    console.log("Read data finished");
}
};

const writeData = async (filename,content) => {
    
    await writeFile(filename, content);
    
};

const appendData = async (filename,content) => {
    await appendFile(filename, content);
    
};

const deleteFile = async (filename) => {
    try {
        await unlink(filename);
    } catch (error) {
        console.log("File not found");
    }
};


const data = await readData("file1.js");
console.log(data);