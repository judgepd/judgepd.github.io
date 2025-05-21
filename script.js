document.getElementById('resourceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const blueBoxes = parseInt(document.getElementById('blueBoxes').value);
    const purpleBoxes = parseInt(document.getElementById('purpleBoxes').value);
    const goldBoxes = parseInt(document.getElementById('goldBoxes').value);
    const woodAmount = parseFloat(document.getElementById('woodAmount').value);
    const ironAmount = parseFloat(document.getElementById('ironAmount').value);
    const electricityAmount = parseFloat(document.getElementById('electricityAmount').value);
    const resourceRequired = parseFloat(document.getElementById('resourceRequired').value);

    // Input validation (additional to HTML5 validation)
    if (isNaN(blueBoxes) || isNaN(purpleBoxes) || isNaN(goldBoxes) ||
        !Number.isInteger(blueBoxes) || !Number.isInteger(purpleBoxes) || !Number.isInteger(goldBoxes) ||
        blueBoxes < 0 || purpleBoxes < 0 || goldBoxes < 0) {
        alert("Please enter whole numbers for blue, purple, and gold boxes.");
        return;
    }

    if (isNaN(woodAmount) || isNaN(ironAmount) || isNaN(electricityAmount) || isNaN(resourceRequired) ||
        woodAmount < 0 || ironAmount < 0 || electricityAmount < 0 || resourceRequired < 0) {
        alert("Please enter valid positive numbers for resource amounts and required resource.");
        return;
    }

    // Calculations
    const box_total = ((blueBoxes * 10000) + (purpleBoxes * 100000) + (goldBoxes * 1000000)) / 1000000;
    const resource_total = woodAmount + ironAmount + electricityAmount;
    const required_total = resourceRequired * 3;
    const upgrade_amount = required_total - resource_total - box_total;

    // Display results
    document.getElementById('boxTotalDisplay').textContent = box_total.toFixed(2); // Display with 2 decimal places
    document.getElementById('resourceTotalDisplay').textContent = resource_total.toFixed(2);
    document.getElementById('requiredTotalDisplay').textContent = required_total.toFixed(2);

    const upgradeAmountDisplay = document.getElementById('upgradeAmountDisplay');
    upgradeAmountDisplay.classList.remove('red-text', 'green-text'); // Clear previous styling

    if (upgrade_amount > 0) {
        upgradeAmountDisplay.textContent = `You are short by ${upgrade_amount.toFixed(1)} million`;
        upgradeAmountDisplay.classList.add('red-text');
    } else {
        upgradeAmountDisplay.textContent = `You have enough resources to start building and will have ${Math.abs(upgrade_amount).toFixed(1)} million spare`;
        upgradeAmountDisplay.classList.add('green-text');
    }
});