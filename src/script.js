// Function to generate a chart (Placeholder functionality)
document.getElementById("generateChart").addEventListener("click", function() {
    alert("Chart Generated! (Feature coming soon)");
});

// Sample transactions array
let transactions = [
    { id: 14, account: "savings", type: "Expense", amount: 70000, statement: "Expense recorded", date: "2024-04-22" },
    { id: 13, account: "savings", type: "Expense", amount: 4000, statement: "Expense recorded", date: "2024-04-22" },
    { id: 12, account: "savings", type: "Expense", amount: 2000, statement: "Expense recorded", date: "2024-04-22" },
    { id: 11, account: "savings", type: "Expense", amount: 5000, statement: "Expense recorded", date: "2024-04-22" }
];

// Function to dynamically update the transaction table
function updateTransactionTable() {
    let tableBody = document.getElementById("transactionTable");
    tableBody.innerHTML = ""; // Clear existing rows

    transactions.forEach(transaction => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.account}</td>
            <td>${transaction.type}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.statement}</td>
            <td>${transaction.date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call function to populate transactions initially
updateTransactionTable();

// Function to navigate to different pages
function goToPage(page) {
    window.location.href = page;
}

// Logout functionality
document.querySelector(".logout").addEventListener("click", function() {
    alert("Logging out...");
    window.location.href = "login.html"; // Redirect to login page
});
