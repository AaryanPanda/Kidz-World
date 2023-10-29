const itemNames = {}; // Object to store item details


//Added Event Listener to Carts
document.addEventListener('click', function(event) {
  const clickedElement = event.target.closest('.cart-icon');

  
  if (clickedElement) {
    const itemDetails = clickedElement.getAttribute('data-item');
    const itemPrice = parseFloat(clickedElement.getAttribute('data-price'));


    // Update or add item details in the itemNames object
    if (itemNames[itemDetails]) {
      itemNames[itemDetails].quantity += 1;
    } else {
      itemNames[itemDetails] = {
        price: itemPrice,
        quantity: 1
    };
    updateItemNumber(); // Update item number when a new item is added
    }
  }
    console.log
});




//Built Update Function
function updateItemNumber() {
    const itemNumberSpan = document.getElementById('item-number');
    let currentItemCount = parseInt(itemNumberSpan.textContent);
    currentItemCount += 1;
    itemNumberSpan.textContent = currentItemCount;    
}





//Added Event Listener to the Main Cart
const mainCart = document.getElementById('main-cart');

mainCart.addEventListener('click', function() {

  console.clear(); // Clear console to avoid repetition

  let totalAmount = 0;  // Initialize the total amount

  for (const [itemTitle, itemInfo] of Object.entries(itemNames)) {
    console.log(`Item Name: ${itemTitle}, Item Price: $${itemInfo.price.toFixed(2)}, Item Quantity: ${itemInfo.quantity}`);

    // Calculate item total and add it to the total amount
    const itemTotal = itemInfo.price * itemInfo.quantity;
    totalAmount += itemTotal;
  }

  // Calculate dollars and cents
  const dollars = Math.floor(totalAmount);
  const cents = Math.round((totalAmount - dollars) * 100);

  console.log(`The total amount is ${dollars}$ and ${cents}cents`);

  whatsappLink = "https://api.whatsapp.com/send?phone=918114720014&text=Order%20details"
  whatsappApi(dollars, cents)

  window.open(whatsappLink)
});




//Whatsapp API

let whatsappLink = "https://api.whatsapp.com/send?phone=918114720014&text=Order%20details"

function whatsappApi(dollars, cents) {
  for (const [itemTitle, itemInfo] of Object.entries(itemNames)) {

    whatsappLink += "%0A" + itemTitle + "%20" + itemInfo.quantity

  }

  whatsappLink += "%0A" + "Total Price:" + "%20" + "$" + dollars + "%20" + cents + "c"

}
