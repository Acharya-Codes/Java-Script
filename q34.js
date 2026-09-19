const products = [
    { name: "Laptop", price: 60000, stock: 5 },
    { name: "Mouse", price: 800, stock: 0 },
    { name: "Keyboard", price: 2500, stock: 3 }
];
function printing({name,price}) {
    console.log(name);
    console.log(price);
}
printing(products[0]);
function q2({stock,name}) {
    if(stock > 0) {
        console.log(name);
    }
}
for (const product of products) {
    q2(product);
}