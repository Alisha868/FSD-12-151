import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addToCart = async (product) => {
  const myCart = await getCart();
  const isFound = myCart.find((item) => item.id === product.id);
  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }
  await saveCart(myCart);
  console.log(`product added/updated with id ${product.id} into cart`);
};

const showCart = async () => {
  const data = await getCart();
  console.table(data);
  let total = 0;
for(let i=0; i<data.length; i++){
    total += data[i].price * data[i].qty;
}
console.log("you have to pay total amount of Rs .",total);
};

const removeProduct = async (field, value) => {
  const myCart = await getCart();
  const index = myCart.findIndex((item) => String(item[field]) === String(value));

  if (index !== -1) {
    myCart.splice(index, 1); // remove the product
    await saveCart(myCart);
    console.log(`✅ Product removed with ${field} = ${value}`);
  } else {
    console.log(`🛑 Product with ${field} = ${value} not found`);
  }
};


const updateQuantity = async (productId, newQty) => {
  const myCart = await getCart();
  const isFound = myCart.find((item) => item.id === productId);
  if (isFound) {
    isFound.qty = newQty;
    await saveCart(myCart);
    console.log(`product quantity updated with id ${productId} in cart`);
  } else {
    console.log(`product with id ${productId} not found in cart`);
  }
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Flipkart 🤸");
    console.log("1.......... Show cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Checkout");
    choice = await cin.question("Enter your choice:");
    switch (Number(choice)) {
      case 1:
        await showCart();
        break;
      case 2:
        let data = await cin.question("Enter id,name,price,qty:");
        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());
        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };
        await addToCart(product);

        break;
      case 3:
        let field = await cin.question("Remove by (id/name/price/qty): ");
         let value = await cin.question(`Enter ${field}: `);
         await removeProduct(field, value);
         break;


      case 4:
      
      let input = await cin.question("Enter product id and new quantity (comma-separated):");
       const [productId, newQty] = input.split(",").map((item) => item.trim());
       await updateQuantity(Number(productId), Number(newQty));
       break;

      case 5:
        console.log("See you later");
        break;
      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != 5);
  cin.close();
};

main();