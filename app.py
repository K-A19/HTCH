from flask import Flask, flash, redirect, render_template, request, session, url_for
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from functools import wraps
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# ----------------------------
# Flask app setup
# ----------------------------
app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# ----------------------------
# MongoDB setup
# ----------------------------
# Load environment variables from .env file
load_dotenv()
# Access constants
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client.htch  # database
users_col = db.users  # users collection

# ----------------------------
# Login required decorator
# ----------------------------
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "user_id" not in session:
            return redirect(url_for("login"))
        return f(*args, **kwargs)
    return decorated_function

# ----------------------------
# Main dashboard / home
# ----------------------------
@app.route("/")
@login_required
def index():

    return render_template("index.html", name=session['name'])

# ----------------------------
# Login route
# ----------------------------
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        if not email or not password:
            return render_template("login.html", error="Username and password required")
        
        user = users_col.find_one({"email": email})
        if not user:
            return render_template("register.html")
        
        if password != user["password"]:
            return render_template("login.html", error="Invalid email or password")

        session["user_id"] = user["_id"]
        session["name"] = user["name"]
        return redirect("/")

    if "user_id" in session:
        return redirect("/")
    else:
        return render_template("login.html")

    

# ----------------------------
# Logout
# ----------------------------
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/login")

# ----------------------------
# Signup / Register
# ----------------------------
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")

        if not name or not password or not confirmation or not email:
            return render_template("register.html", error="Fill in all fields")
        if users_col.find_one({"email": email}):
            return render_template("register.html", error="Email already used")
        if password != confirmation:
            return render_template("register.html", error="Passwords do not match")

        user_doc = {
            "username": name,
            "email": email,
            "hash": generate_password_hash(password),
        }
        result = users_col.insert_one(user_doc)
        session["user_id"] = result.inserted_id
        session["name"] = name
        return redirect("/")

    if "user_id" in session:
        return redirect("/")
    else:
        return render_template("register.html")

# ----------------------------
# Change password
# ----------------------------
@app.route("/password", methods=["GET", "POST"])
@login_required
def password():
    user = users_col.find_one({"_id": session["user_id"]})
    if request.method == "POST":
        c_password = request.form.get("c-password")
        n_password = request.form.get("n-password")
        confirmation = request.form.get("confirmation")

        if not c_password or not n_password or not confirmation:
            return "All fields required", 400
        if not check_password_hash(user["hash"], c_password):
            return "Incorrect current password", 403
        if n_password != confirmation:
            return "New password and confirmation do not match", 400

        users_col.update_one(
            {"_id": user["_id"]},
            {"$set": {"hash": generate_password_hash(n_password)}}
        )
        return redirect("/")

    return render_template("password.html")

# ----------------------------
# Search users / mentors
# ----------------------------
@app.route("/search", methods=["GET"])
@login_required
def search():
    query = request.args.get("q", "")
    industry_filter = request.args.get("industry", "")

    filters = {"_id": {"$ne": session["user_id"]}}
    if query:
        filters["username"] = {"$regex": query, "$options": "i"}
    if industry_filter:
        filters["industry"] = industry_filter

    results = list(users_col.find(filters))
    return render_template("search.html", results=results)

# ----------------------------
# Run the app
# ----------------------------
if __name__ == "__main__":
    app.run(debug=True)