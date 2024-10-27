let initialPrice = 100; 
let days = 7;
let finalPrice = initialPrice * Math.pow(1.1, days); 
console.log("Цена товара через 7 дней:", finalPrice.toFixed(2), "рублей");
