const container = document.querySelector("#container");

document.addEventListener("DOMContentLoaded", function () {
  const orderList = document.getElementById("order-list");

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

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
