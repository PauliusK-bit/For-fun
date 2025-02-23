const API_URL = "https://orders-api.onrender.com/orders";

document
  .getElementById("product-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const order = {
      address: document.getElementById("address").value,
      phoneNumber: document.getElementById("phone-number").value,
      product: document.getElementById("product").value,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    if (response.ok) {
      window.location.href = "productList.html";
    } else {
      alert("Klaida siunčiant užsakymą!");
    }
  });
