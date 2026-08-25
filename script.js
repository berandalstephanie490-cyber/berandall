let numbers = [];

function insertNumber() {
    let input = document.getElementById("number");
    let value = Number(input.value);

    // Check if the input is a valid number
    if (input.value === "") {
        alert("Please enter a number.");
        return;
    }

    // Add number to array
    numbers.push(value);

    // Display numbers
    displayNumbers();

    // Calculate results
    calculateResults();

    // Clear input
    input.value = "";
    input.focus();
}

function displayNumbers() {
    let numbersDiv = document.getElementById("numbers");

    numbersDiv.innerHTML = "";

    for (let i = 0; i < numbers.length; i++) {
        numbersDiv.innerHTML += numbers[i] + "<br>";
    }
}

function calculateResults() {
    if (numbers.length === 0) {
        document.getElementById("sum").textContent = "0";
        document.getElementById("highest").textContent = "0";
        document.getElementById("lowest").textContent = "0";
        return;
    }

    let sum = 0;
    let highest = numbers[0];
    let lowest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

        if (numbers[i] > highest) {
            highest = numbers[i];
        }

        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }

    document.getElementById("sum").textContent = sum;
    document.getElementById("highest").textContent = highest;
    document.getElementById("lowest").textContent = lowest;
}

function deleteAll() {
    numbers = [];

    document.getElementById("numbers").innerHTML = "";
    document.getElementById("sum").textContent = "0";
    document.getElementById("highest").textContent = "0";
    document.getElementById("lowest").textContent = "0";

    document.getElementById("number").value = "";
}
