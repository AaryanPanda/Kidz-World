const itemDetails = {}; // Object to store item details




//Added Event Listener to Carts
document.addEventListener('click', function(event) {
  const clickedElement = event.target.closest('.cart-icon');

  if (clickedElement) {
    const itemName = clickedElement.getAttribute('data-item');
    const itemPrice = parseFloat(clickedElement.getAttribute('data-price'));
    let itemQuantity = parseInt(clickedElement.getAttribute('data-quantity'));

    // Increment the quantity by 1 for each click
    itemQuantity += 1;

    // Update the data-quantity attribute
    clickedElement.setAttribute('data-quantity', itemQuantity);

    // Update or add item details in the itemDetails object
    if (itemDetails[itemName]) {
      itemDetails[itemName].quantity += 1;
    } else {
      itemDetails[itemName] = {
        price: itemPrice,
        quantity: 1
    };
    updateItemNumber(); // Update item number when a new item is added
    }
  }
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

  for (const [itemName, itemInfo] of Object.entries(itemDetails)) {
    console.log(`Item Name: ${itemName}, Item Price: $${itemInfo.price.toFixed(2)}, Item Quantity: ${itemInfo.quantity}`);

    // Calculate item total and add it to the total amount
    const itemTotal = itemInfo.price * itemInfo.quantity;
    totalAmount += itemTotal;
  }

  // Calculate dollars and cents
  const dollars = Math.floor(totalAmount);
  const cents = Math.round((totalAmount - dollars) * 100);

  console.log(`The total amount is ${dollars}$ and ${cents} cents`);
});
