// Function to toggle the visibility of company descriptions
function toggleDescription(rowId) {
    var description = document.getElementById('description_' + rowId);
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
}

// Add event listeners to each row to toggle descriptions
document.addEventListener('DOMContentLoaded', function () {
    var table = document.querySelector('table');
    var rows = table.querySelectorAll('tr');

    for (var i = 1; i < rows.length; i++) { // Skip the header row
        var row = rows[i];
        var rowId = 'row_' + i;
        row.setAttribute('id', rowId);
        

        descriptionCell.appendChild(descriptionButton);
        row.appendChild(descriptionCell);

    }
});
