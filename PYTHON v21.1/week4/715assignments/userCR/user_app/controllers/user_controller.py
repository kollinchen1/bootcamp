from flask import render_template,redirect,request # Import Flask to allow us to create our app
from user_app import app
from user_app.models.user import User

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def readAll():
    return render_template("read(All).html", all_users = User.get_all())
        
@app.route('/users/new')          # The "@" decorator associates this route with the function immediately following
def create():
    return render_template("create.html")
        
@app.route("/users/create", methods = ['POST'])
def create_user():
    print(request.form)
    User.create(request.form)
    return redirect("/")

@app.route('/users/<int:user_id>')
def display_user(user_id):
    return render_template("user.html", user = User.get_one({"id": user_id}))

# display the page to update a user
@app.route("/users/<int:user_id>/edit")
def edit_user_form(user_id):
    return render_template("edit_user.html", user = User.get_one({"id": user_id}))


# perform the action of updating a single user
@app.route("/users/<int:user_id>/update", methods = ["POST"])
def update_user(user_id):
    print(request.form)
    new_dict = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "id": user_id
    }
    another_dict = {
        **request.form,
        "id": user_id
    }
    User.update(another_dict)

    return redirect("/")


# perform the action of deleting a single user
@app.route("/users/<int:user_id>/delete")
def delete_user(user_id):
    User.delete({"id": user_id})
    return redirect("/")

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."