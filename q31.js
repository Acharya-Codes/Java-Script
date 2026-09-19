const products = [
    { name: "Laptop", price: 60000, stock: 5 },
    { name: "Mouse", price: 800, stock: 0 },
    { name: "Keyboard", price: 2500, stock: 3 },
    { name: "Monitor", price: 15000, stock: 7 },
    { name: "Headphones", price: 3000, stock: 0 }
];
const inStock = products.filter(product => product.stock > 0);
const instockName = inStock.map(product => product.name);
const findCost = products.find(product => product.price > 10000);
const totalPrice = inStock.reduce((total,product) => {
    return total = total + product.price;
},0);
console.log(inStock);
console.log(instockName);
console.log(findCost);
console.log(totalPrice);
