document.getElementById('add-category').addEventListener('click', function() {
    let newCategory = document.getElementById('new-category').value.trim();
    if (newCategory) {
        let categoryDropdown = document.getElementById('expense-category');
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

document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let category = document.getElementById('expense-category').value;
    let targetAmount = document.getElementById('target-amount').value;

    if (category && targetAmount) {
        let table = document.getElementById('budget-table').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();

        newRow.insertCell(0).textContent = category;
        newRow.insertCell(1).textContent = targetAmount;

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function() {
            table.deleteRow(newRow.rowIndex - 1);
        };

        newRow.insertCell(2).appendChild(removeBtn);

        document.getElementById('budget-form').reset();
        alert('Budget allocated successfully!');
    } else {
        alert('Please fill in all required fields.');
    }
});