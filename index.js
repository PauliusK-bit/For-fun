const container = document.querySelector("#container");

const productForm = document.querySelector("#product-form");

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const address = document.querySelector("#address").value;
  const phoneNumber = document.querySelector("#phone-number").value;
  const product = document.querySelector("#product").value;

  const order = { address, phoneNumber, product };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  window.location.href = "productList.html";
});
