const product = {
    name: "Laptop",
    price: 65000,
    brand: "Asus",
    stock: 5
};
const {name,price,brand,stock} = product;
console.log(name);
console.log(price);
console.log(brand);

const fruits = ["Apple","Mango","Banana","Orange"];
const [a, ,c] = fruits;
console.log(a);
console.log(c);