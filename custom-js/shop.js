// shop.js



var addtocart = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
addtocart.addEventListener("click", addToCart);

var addtocart1 = document.getElementById('addtocart1');
// add a listener for add to cart if such a button id is pressed
addtocart1.addEventListener("click", addToCart);

var addtocart2 = document.getElementById('addtocart2');
// add a listener for add to cart if such a button id is pressed
addtocart2.addEventListener("click", addToCart);

var addtocart3 = document.getElementById('addtocart3');
// add a listener for add to cart if such a button id is pressed
addtocart3.addEventListener("click", addToCart);

var addtocart4 = document.getElementById('addtocart4');
// add a listener for add to cart if such a button id is pressed
addtocart4.addEventListener("click", addToCart);

var addtocart5 = document.getElementById('addtocart5');
// add a listener for add to cart if such a button id is pressed
addtocart5.addEventListener("click", addToCart);

function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}