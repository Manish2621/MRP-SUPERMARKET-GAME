// Game variables
let stock = 50;
let employees = 0;
let balance = 100;  // Starting balance
let employeeSalary = 50;
let productsPerOrder = 20;
let productPrice = 10;

// Elements
const stockElement = document.getElementById('stock');
const employeesElement = document.getElementById('employees');
const balanceElement = document.getElementById('balance');
const messageElement = document.getElementById('message');
const shelvesElement = document.getElementById('shelves');
const cashiersElement = document.getElementById('cashiers');

// Game actions
document.getElementById('orderButton').addEventListener('click', orderProducts);
document.getElementById('hireButton').addEventListener('click', hireCashier);

// Update the displayed stats
function updateStats() {
  stockElement.textContent = stock;
  employeesElement.textContent = employees;
  balanceElement.textContent = balance;
}

// Create a shelf with products
function createShelf() {
  const shelf = document.createElement('div');
  shelf.className = 'shelf';
  shelf.textContent = `Product ${stock}`;
  shelvesElement.appendChild(shelf);
}

// Hire a cashier and update the system
function hireCashier() {
  if (balance < employeeSalary) {
    messageElement.textContent = "Not enough balance to hire a cashier!";
    return;
  }

  employees++;
  balance -= employeeSalary;
  updateStats();
  createCashier();
  messageElement.textContent = "Cashier hired!";
}

// Create a cashier for the game
function createCashier() {
  const cashier = document.createElement('div');
  cashier.className = 'cashier';
  cashier.textContent = `Cashier ${employees}`;
  cashiersElement.appendChild(cashier);
}

// Order products and add them to the inventory
function orderProducts() {
  if (balance < 100) {
    messageElement.textContent = "Not enough balance to order products!";
    return;
  }

  stock += productsPerOrder;
  balance -= 100;
  updateStats();
  messageElement.textContent = "Products ordered!";
}

// Simulate a customer buying products
setInterval(function () {
  if (stock > 0 && employees > 0) {
    stock -= 1;  // A customer buys one product
    balance += productPrice;  // Profit from the sale
    updateStats();
  }
}, 3000);  // Simulate a sale every 3 seconds
