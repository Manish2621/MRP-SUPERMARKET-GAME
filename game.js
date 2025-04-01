// Initial Game State
let inventoryCount = 0;
let employeeCount = 0;
let balance = 5000;

// DOM Elements
const inventoryDisplay = document.getElementById('inventoryCount');
const employeeDisplay = document.getElementById('employeeCount');
const balanceDisplay = document.getElementById('balance');
const orderButton = document.getElementById('orderButton');
const hireButton = document.getElementById('hireCashierButton');

// Event Listeners
orderButton.addEventListener('click', orderProducts);
hireButton.addEventListener('click', hireCashier);

// Order Products Logic
function orderProducts() {
    const orderCost = 1000; // Example cost per order
    if (balance >= orderCost) {
        inventoryCount += 10; // Adding 10 items per order
        balance -= orderCost;
        updateGameState();
    } else {
        alert("Not enough funds to order products!");
    }
}

// Hire Cashier Logic
function hireCashier() {
    const hireCost = 1500; // Example cost to hire one cashier
    if (balance >= hireCost) {
        employeeCount += 1;
        balance -= hireCost;
        updateGameState();
    } else {
        alert("Not enough funds to hire a cashier!");
    }
}

// Update the Game State Display
function updateGameState() {
    inventoryDisplay.textContent = inventoryCount;
    employeeDisplay.textContent = employeeCount;
    balanceDisplay.textContent = balance;
}

// Simple Game Loop for Real-Time Updates (every 5 seconds)
function gameLoop() {
    setInterval(() => {
        // Real-time updates: Generate some profit for each employee
        if (employeeCount > 0) {
            balance += employeeCount * 100; // Example: Each employee generates $100 profit per cycle
            updateGameState();
        }
    }, 5000); // Every 5 seconds
}

// Start the game loop
gameLoop();
