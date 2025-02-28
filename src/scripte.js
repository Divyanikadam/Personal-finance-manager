document.getElementById('add-category').addEventListener('click', function() {
    let newCategory = document.getElementById('new-category').value.trim();
    if (newCategory) {
        let categoryDropdown = document.getElementById('category');
        let option = document.createElement('option');
        option.value = newCategory.toLowerCase();
        option.textContent = newCategory;
        categoryDropdown.appendChild(option);
        document.getElementById('new-category').value = '';
        alert('New category added!');
    } else {
        alert('Please enter a valid category name.');
    }
});

document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let account = document.getElementById('account').value;
    let category = document.getElementById('category').value;
    let amount = document.getElementById('amount').value;
    let date = document.getElementById('date').value;
    let remark = document.getElementById('remark').value;

    if (account && category && amount && date) {
        let table = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();

        newRow.insertCell(0).textContent = account;
        newRow.insertCell(1).textContent = category;
        newRow.insertCell(2).textContent = amount;
        newRow.insertCell(3).textContent = date;
        newRow.insertCell(4).textContent = remark;

        document.getElementById('expense-form').reset();
        alert('Expense added successfully!');
    } else {
        alert('Please fill in all required fields.');
    }
});