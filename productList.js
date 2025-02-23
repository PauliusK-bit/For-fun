const API_URL = "https://orders-api.onrender.com/orders";

document.addEventListener("DOMContentLoaded", async function () {
  const orderList = document.getElementById("order-list");

  const response = await fetch(API_URL);
  const orders = await response.json();

  if (orders.length === 0) {
    orderList.innerHTML = "<p>Nėra užsakymų</p>";
  } else {
    orders.forEach((order, index) => {
      const li = document.createElement("li");
      li.textContent = `📦 Užsakymas ${index + 1}: ${order.product}, Adresas: ${
        order.address
      }, Tel: ${order.phoneNumber}`;
      orderList.appendChild(li);
    });
  }
});
