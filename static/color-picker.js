const colorPicker = document.getElementById("colorPicker");
const label = document.getElementById("colorLabel");
const copyBtn = document.getElementById("copyBtn");

// Event listener for the Color Picker, changes the label to the current Hex value
colorPicker.addEventListener("input", function() {
    label.innerHTML = "Hex: " + colorPicker.value;
}); 

// Event listener for the Copy button, copies the Hex value to clipboard
copyBtn.addEventListener("click", function() {
    var hex = colorPicker.value;
    navigator.clipboard.writeText(hex);

    $('[data-toggle="tooltip"]').tooltip('enable').tooltip('show');
});

// Event listener for Copy button, disables tooltip when user moves mouse out of the button
copyBtn.addEventListener("mouseout", function() {
    $('[data-toggle="tooltip"]').tooltip('disable');
});

// Initializing all tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip('disable');
});