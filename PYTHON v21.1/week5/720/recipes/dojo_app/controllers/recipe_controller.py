
from flask import render_template, redirect, request, session, flash


from dojo_app import app
from dojo_app.models.user import User
from dojo_app.models.recipe import Recipe


@app.route("/dashboard")
def dashboard():
    if "uuid" not in session:
        return redirect("/")
    
    return render_template(
        "recipes/dashboard.html",
        logged_in_user = User.get_by_id({"id": session['uuid']}),
        all_recipes = Recipe.get_all()
    )

@app.route("/recipes/new")
def new_recipes():
    if "uuid" not in session:
        return redirect("/")
    return render_template(
        "recipes/new_recipe.html", 
        logged_in_user = User.get_by_id({"id": session['uuid']}))

@app.route("/recipes/create", methods = ["POST"])
def create_recipe():
    if not Recipe.validate(request.form):
        return redirect("/recipes/new")
    post_data = {
        **request.form,
        "user_id": session['uuid']
    }
    print(post_data)
    Recipe.create(post_data)
    return redirect("/dashboard")

@app.route("/recipes/<int:id>")
def display_recipe(id):
    if "uuid" not in session:
        return redirect("/")
    
    return render_template(
        "recipes/recipe.html",
        logged_in_user = User.get_by_id({"id": session['uuid']}),
        recipe = Recipe.get_one({"id": id})
    )
@app.route("/recipes/edit/<int:id>")
def edit_recipe(id):
    if "uuid" not in session:
        return redirect("/")

    recipe = Recipe.get_one({"id": id})

    if session['uuid'] != recipe.user.id:
        # flash("YOU DO NOT EDIT THE ICE CREAM YOU DID NOT MAKE!")
        return redirect("/dashboard")

    return render_template(
        "recipes/edit_recipe.html",
        logged_in_user = User.get_by_id({"id": session['uuid']}),
        recipe = recipe
    )

@app.route("/recipes/update/<int:id>", methods = ['POST'])
def update_recipe_info(id):
    if not Recipe.validate(request.form):
        return redirect(f"/recipes/edit/{id}")
    post_data = {
        **request.form,
        "id": id
    }
    Recipe.update(post_data)

    return redirect("/dashboard")


@app.route("/recipes/delete/<int:id>")
def delete_recipe(id):
    recipe = Recipe.get_one({"id": id})

    if session['uuid'] != recipe.user.id:
        flash("Not yours, dont try to hack delete")
        return redirect("/dashboard")

    Recipe.delete({"id": id})

    return redirect('/dashboard')