from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt

from  dojo_app import app
from ..models.user import User

bcrypt = Bcrypt(app)

@app.route("/")
def index():
    if "uuid" in session:
        return redirect("/dashboard")
    return render_template("users/index.html")

@app.route("/register", methods = ["POST"])
def register():
    print(request.form)
    if not User.register_validate(request.form):
        return redirect("/")
    password = request.form['password']
    hash_password = bcrypt.generate_password_hash(password)
    data = {
        **request.form,
        "password": hash_password
    }
    user_id = User.create(data)

    session["uuid"] = user_id
    flash('You have been successfully registered', 'welcome')
    return redirect("/dashboard")

@app.route("/login", methods = ["POST"])
def login():
    if not User.login_validate(request.form):
        return redirect("/")
    
    user = User.get_by_email({"email": request.form['email']})

    # uuid = unique user id
    session['uuid'] = user.id

    return redirect("/dashboard")

@app.route("/logout")
def logout():
    session.clear()
    flash('You have been successfully logged out', 'welcome')
    return redirect("/")