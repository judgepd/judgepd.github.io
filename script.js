document.addEventListener('DOMContentLoaded', () => {
    const resourceForm = document.getElementById('resourceForm');
    const boxTotalSpan = document.getElementById('boxTotal');
    const resourceTotalSpan = document.getElementById('resourceTotal');
    const requiredTotalSpan = document.getElementById('requiredTotal');
    const remainingNeededSpan = document.getElementById('remainingNeeded');
    const resultsDiv = document.getElementById('results');

    resourceForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const blueBoxes = parseInt(document.getElementById('blueBoxes').value);
        const purpleBoxes = parseInt(document.getElementById('purpleBoxes').value);
        const goldBoxes = parseInt(document.getElementById('goldBoxes').value);
        const wood = parseFloat(document.getElementById('wood').value);
        const iron = parseFloat(document.getElementById('iron').value);
        const electricity = parseFloat(document.getElementById('electricity').value);
        const upgradeResource = parseFloat(document.getElementById('upgradeResource').value);

        // Calculate box_total
        const box_total = (blueBoxes * 10000) + (purpleBoxes * 100000) + (goldBoxes * 1000000);

        // Calculate resource_total
        const resource_total = wood + iron + electricity;

        // Calculate required_total
        const required_total = upgradeResource * 3;

        // Display calculated values
        boxTotalSpan.textContent = box_total.toLocaleString(); // Add comma formatting
        resourceTotalSpan.textContent = resource_total.toFixed(1); // Keep one decimal place
        requiredTotalSpan.textContent = required_total.toFixed(1); // Keep one decimal place

        // Calculate and display the final answer
        const remaining_needed = required_total - resource_total - box_total;
        remainingNeededSpan.textContent = remaining_needed.toFixed(1); // Keep one decimal place

        resultsDiv.style.display = 'block'; // Show the results section
    });
});