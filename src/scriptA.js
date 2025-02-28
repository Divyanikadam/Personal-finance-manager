// Sample accounts data
let accounts = [
    { name: "savings", balance: 88000.0, expenses: 137000.0 }
];

// Function to create an account
function createAccount() {
    let name = document.getElementById("accountName").value;
    if (name === "") {
        alert("Please enter an account name.");
        return;
    }
    
    // Add account to list
    accounts.push({ name, balance: 0, expenses: 0 });

    // Update UI
    updateAccountsTable();
    updateAccountDropdown();
    
    alert(`Account '${name}' created successfully!`);
    document.getElementById("accountName").value = "";
}

// Function to delete an account
function deleteAccount() {
    let selectedAccount = document.getElementById("accountSelect").value;
    if (selectedAccount === "") {
        alert("Please select an account to delete.");
        return;
    }

    // Remove account from array
    accounts = accounts.filter(acc => acc.name !== selectedAccount);

    // Update UI
    updateAccountsTable();
    updateAccountDropdown();
    
    alert(`Account '${selectedAccount}' deleted successfully!`);
}

// Function to update the accounts table
function updateAccountsTable() {
    let tableBody = document.getElementById("accountsTable");
    tableBody.innerHTML = "";

    accounts.forEach(acc => {
        let row = `<tr>
            <td>${acc.name}</td>
            <td>${acc.balance}</td>
            <td>${acc.expenses}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to update account dropdown list
function updateAccountDropdown() {
    let select = document.getElementById("accountSelect");
    select.innerHTML = '<option value="">--Select--</option>';

    accounts.forEach(acc => {
        let option = document.createElement("option");
        option.value = acc.name;
        option.textContent = acc.name;
        select.appendChild(option);
    });
}

// Page navigation (for demonstration purposes)
function navigate(page) {
    alert(`Navigating to ${page} page...`);
}

// Logout function
function logout() {
    alert("Logging out...");
}

// Initialize the dropdown and table on page load
window.onload = function () {
    updateAccountsTable();
    updateAccountDropdown();
};
