const products = [
    { name: "Laptop", price: 60000, category: "Electronics", stock: 5 },
    { name: "Mouse", price: 800, category: "Electronics", stock: 0 },
    { name: "Keyboard", price: 2500, category: "Electronics", stock: 3 },
    { name: "Notebook", price: 100, category: "Stationery", stock: 10 },
    { name: "Pen", price: 50, category: "Stationery", stock: 0 }
];
const availableProducts = products.filter(product => product.stock > 0);
const prod = availableProducts.map(product => product.name);
console.log(prod);
const price = availableProducts.map(product => product.price);
const totalPrice = price.reduce((total,n) => {
    return total + n;
},0);
console.log(totalPrice);
const first = availableProducts.find(product => product.price > 2000);
const sec = availableProducts.filter(product => product.price >= 2000);
const thr = sec.map(product => product.name);
console.log(thr);
function expensiveItem() {
    console.log(sec);
}
expensiveItem();
const key = availableProducts.find(product => product.name === "Keyboard");
const updatedProducts = {
    ...key,
    stock: 10,
};
const stationaryNames = availableProducts.filter(product => product.category === "Stationery");
const name = stationaryNames.map(product => product.name);
console.log(name);