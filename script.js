document.getElementById('resourceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const blueBoxes = parseInt(document.getElementById('blueBoxes').value);
    const purpleBoxes = parseInt(document.getElementById('purpleBoxes').value);
    const goldBoxes = parseInt(document.getElementById('goldBoxes').value);
    const wood = parseFloat(document.getElementById('wood').value);
    const iron = parseFloat(document.getElementById('iron').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const resourceRequired = parseFloat(document.getElementById('resourceRequired').value);

    // Calculate box_total
    const box_total = ((blueBoxes * 10000) + (purpleBoxes * 100000) + (goldBoxes * 1000000)) / 1000000;

    // Calculate resource_total
    const resource_total = wood + iron + electricity;

    // Calculate required_total
    const required_total = resourceRequired * 3;

    // Calculate remaining needed
    const remaining_needed = required_total - resource_total - box_total;

    // Display the results
    document.getElementById('displayBoxTotal').textContent = box_total.toFixed(2); // Display with 2 decimal places
    document.getElementById('displayResourceTotal').textContent = resource_total.toFixed(1); // Display with 1 decimal place
    document.getElementById('displayRequiredTotal').textContent = required_total.toFixed(2); // Display with 2 decimal places
    document.getElementById('displayRemainingNeeded').textContent = remaining_needed.toFixed(2); // Display with 2 decimal places

    // Optionally, you could make the results container visible if it was hidden initially
    document.getElementById('results').style.display = 'block';
});