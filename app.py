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