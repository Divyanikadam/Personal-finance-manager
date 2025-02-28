document.getElementById('add-source').addEventListener('click', function() {
    let newSource = document.getElementById('new-source').value.trim();
    if (newSource) {
        let sourceDropdown = document.getElementById('source');
        let option = document.createElement('option');
        option.value = newSource.toLowerCase();
        option.textContent = newSource;
        sourceDropdown.appendChild(option);
        document.getElementById('new-source').value = '';
        alert('New source added!');
    } else {
        alert('Please enter a valid source name.');
    }
});

document.getElementById('income-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Income added successfully!');
});