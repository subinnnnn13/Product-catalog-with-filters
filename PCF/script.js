let users = {};
let quantities = { mobile: 0, dress: 0, book: 0 };
let prices = { mobile: 12000, dress: 800, book: 350 };

function register() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  if (username && password) {
    users[username] = password;
    document.getElementById('message').innerText = "✅ Registration successful! You can now login.";
  } else {
    document.getElementById('message').innerText = "⚠️ Please enter username and password!";
  }
}

function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  if (users[username] === password) {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('catalog-page').style.display = 'block';
  } else {
    document.getElementById('message').innerText = "❌ Invalid username or password!";
  }
}

function logout() {
  document.getElementById('catalog-page').style.display = 'none';
  document.getElementById('login-page').style.display = 'block';
}

function changeQty(product, value) {
  quantities[product] += value;
  if (quantities[product] < 0) quantities[product] = 0;
  document.getElementById(product + "Qty").innerText = quantities[product];
  updateTotal();
}

function updateTotal() {
  let total = 0;
  for (let p in quantities) {
    total += quantities[p] * prices[p];
  }
  document.getElementById("total").innerText = "Total: ₹" + total;
}

function placeOrder() {
  let total = 0;
  for (let p in quantities) {
    total += quantities[p] * prices[p];
  }
  if (total === 0) {
    alert("🛒 Please add at least one item before placing order!");
  } else {
    alert("🎉 Order placed successfully! Total amount: ₹" + total);
    quantities = { mobile: 0, dress: 0, book: 0 };
    document.getElementById("mobileQty").innerText = 0;
    document.getElementById("dressQty").innerText = 0;
    document.getElementById("bookQty").innerText = 0;
    document.getElementById("total").innerText = "Total: ₹0";
  }
}
