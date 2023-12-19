let cartItems = [];

function addToCart() {
    let cartItem = {
        name: "Product Name",
        description: "Product Description",
        price: 19.99
    };

    cartItems.push(cartItem);
    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    cartItems.forEach((item, index) => {
        let cartItemDiv = document.createElement("div");
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}