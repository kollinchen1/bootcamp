from flask import render_template, redirect, request
from dojo_app import app
# from dojo_app.models.dojo import Dojo
from ..models.dojo import Dojo
@app.route("/")
def index_redirect():
    return redirect("/dojos")

@app.route("/dojos")
def index():
    return render_template("dojos/index.html", all_dojos = Dojo.get_all())

@app.route("/dojos/create", methods = ['POST'])
def create_dojo():
    # print(request.form)
    Dojo.create(request.form)

    return redirect("/")

@app.route("/dojos/<int:dojo_id>")
def view_dojo(dojo_id):
    return render_template("dojos/dojo.html", dojo = Dojo.get_one({"id": dojo_id}))