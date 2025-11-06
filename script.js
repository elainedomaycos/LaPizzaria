// Cart array to store the added items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Create an object for the item
  const item = {
    name: itemName,
    price: itemPrice
  };

  // Add the item to the cart
  cartItems.push(item);

  // Show a confirmation message
  alert(`Added ${itemName} to the cart!`);
}
