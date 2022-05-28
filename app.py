from flask import *

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    """Main Page"""
    return render_template("index.html")

@app.route("/color-picker")
def color_picker():
    """Color Picker"""
    return render_template("color-picker.html")

@app.route("/regex-generator")
def regex_generator():
    """RegEx Generator"""
    return render_template("regex-generator.html")

@app.route("/pixel-locator")
def pixel_locator():
    """Pixel Locator"""
    return render_template("pixel-locator.html")

@app.route("/testing")
def testing2():
    """Testing"""
    return render_template("testing.html")