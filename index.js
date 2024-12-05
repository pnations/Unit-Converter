// Get elements from the DOM
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const inputEl = document.getElementById("input-El");
const lengthEl = document.getElementById("length-El");
const volumeEl = document.getElementById("volume-El");
const massEl = document.getElementById("mass-El");
const themeToggle = document.getElementById("theme-toggle");

// Conversion constants (metric to imperial)
const conversions = {
    length: { toImperial: 3.281, toMetric: 0.3048 },
    volume: { toImperial: 0.264, toMetric: 3.78541 },
    mass: { toImperial: 2.204, toMetric: 0.453592 }
};

// Function to convert and update UI
function convert() {
    const baseValue = parseFloat(inputEl.value);
    
    if (isNaN(baseValue)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert and display results
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * conversions.length.toImperial).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * conversions.length.toMetric).toFixed(3)} meters`;
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * conversions.volume.toImperial).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * conversions.volume.toMetric).toFixed(3)} liters`;
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * conversions.mass.toImperial).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * conversions.mass.toMetric).toFixed(3)} kilograms`;
}

// Function to reset the input and results
function reset() {
    inputEl.value = "";
    lengthEl.textContent = "";
    volumeEl.textContent = "";
    massEl.textContent = "";
}

// Function to toggle dark/light mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Event listeners
convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
themeToggle.addEventListener("click", toggleTheme);

// Convert on Enter key press
inputEl.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        convert();
    }
});
