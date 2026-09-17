const price = 799;
const quantity = 3;
const discountpercentage = 10;
const original_price = price * quantity;
const discount = original_price * discountpercentage / 100;
const final_price = original_price - discount;
console.log(original_price);
console.log(discount);
console.log(final_price);
