from flask import render_template, redirect, request
from dojo_app import app
from ..models.dojo import Dojo
from ..models.ninja import Ninja

@app.route("/ninjas")
def display_ninjas():
    return render_template("ninjas/ninjas.html", all_dojos = Dojo.get_all())

@app.route("/ninjas/create", methods = ['POST'])
def create_ninja():
    Ninja.create(request.form)
    id = request.form['dojo_id']
    print(id)
    return redirect("/dojos/"+id)