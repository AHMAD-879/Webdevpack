const cp = document.getElementById("colorPicker");
const label = document.getElementById("colorLabel");

cp.addEventListener("change", function() {
    label.innerHTML = "Hex: " + cp.getAttribute("value");
});