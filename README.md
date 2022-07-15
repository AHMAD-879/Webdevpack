# Webdevpack
## A website offering tools that help web developers and (hopefully) make their lives easier.
This website is made for my final project for Harvard's CS50 course.  <br>
![Website logo](/static/icon.png)
>Video Demo: [Webdevpack - Demonstration](https://www.youtube.com/watch?v=AyWvWtiYOGE)  

<br>

# Webdevpack - Tools
## Color Picker
The only tool currently available is the **Color Picker**, which is a useful tool that lets the user pick a color and displays the corresponding RGB, HSL and Hex codes. <br>
The Color Picker uses the HTML `<input type="color">` tag, which lets the user pick a color using the built-in interface.
The default value is set to be the color of the website's logo, which is `#e93e30`. <br>
The user can copy the Hex value of the chosen color by clicking on the **Copy Hex** button. Clicking on the button will show a tooltip saying **"Copied to clipboard!"**, confirming the copying process.
<br>

## Technologies Used
- Flask framework
    - Python
    - Jinja
- Bootstrap 4
    - JQuery
- HTML
- CSS
- JavaScript


<br>

# Project files:

## Color Picker

<details> <summary>Show List of Files</summary>

- ### `app.py` <br> A file written in Python. Containts flask-related configurations and routes for rendering the different pages.

- ### `requirements.txt` <br> A text file. Contains the required dependencies for the project.

- ### `static/icon.png` <br> An image. Used as a logo and favicon for the project.

- ### `static/styles.css` <br> A CSS stylesheet. Contains general styles for the website, such as body and footer styles.

- ### `static/color-picker.css` <br> A CSS stylesheet. Contains styles for the Color Picker; such as the color swatch, label fonts, and copy button. 

- ### `static/color-picker.js` <br> A JavaScript file. Contains functions and event listeners for the Color Picker; such as changing the label, copying to clipboard, and tooltip-related functions.

- ### `templates/layout.html` <br> An HTML file. Used as a layout for all the HTML files. Contains the required JQuery and Bootstrap scripts, NavBar content, favicon, and footer info. 

- ### `templates/index.html` <br> An HTML file. Used for the Home page. Contains general information about the website.

- ### `templates/color-picker.html` <br> An HTML file. Used for the Color Picker page. Contains the color picker and copy button.
</details>

<br>

# Possible improvements
This project could be improved in various ways. List of possible improvements:
- Use a better designed and more descriptive Home page
- Design a new logo (instead of shamelessly stealing HTML5's logo)
- Reimagine the footer and add a background
- Save recent user-chosen colors in a palette database
- Create more tools, such as a Regular Expression Generator