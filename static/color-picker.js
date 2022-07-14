// Constant variables for HTML elements
const colorPicker = document.getElementById("colorPicker");
const label = document.getElementById("colorLabel");
const copyBtn = document.getElementById("copyBtn");

// Changes the label to view the current Hex value when user changes the input
colorPicker.addEventListener("input", function() {
    label.innerHTML = "Hex: " + colorPicker.value;
}); 

// Copies the Hex value to clipboard when user clicks copy
copyBtn.addEventListener("click", function() {
    var hex = colorPicker.value;
    navigator.clipboard.writeText(hex);

    $('[data-toggle="tooltip"]').tooltip('enable').tooltip('show');
});

// Disables tooltip when user moves mouse out of the button
copyBtn.addEventListener("mouseout", function() {
    $('[data-toggle="tooltip"]').tooltip('disable');
});

// Initializing all tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip('disable');
});