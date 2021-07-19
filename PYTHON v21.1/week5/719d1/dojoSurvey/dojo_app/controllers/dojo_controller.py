from flask import render_template, redirect, request
from dojo_app import app
# from dojo_app.models.dojo import Dojo
from ..models.dojo import Dojo

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    print(request.form)
    return render_template("index.html"
    )

@app.route('/process', methods=['POST'])  
def gotAnswers():
    if not Dojo.validate(request.form):
        return redirect("/")
    print(request.form)
    # if request.form['name'] !="":
    #     print("here 16")
    #     session['name'] = request.form['name']
    # else:
    #     return redirect("/")
    # session['dojo_location'] = request.form['dojo_location']
    # session['favorite_language'] = request.form['favorite_language']
    # session['comment'] = request.form['comment']
    Dojo.create(request.form)
    return redirect("/result")

@app.route('/result')          # The "@" decorator associates this route with the function immediately following
def print_result():
    # print(session['name'])
    # print(session['dojo_location'])
    # print(session['favorite_language'])
    # print(session['comment'])
    # if session['comment'] !="":
    #     comment = session['comment']
    # else:
    #     comment = "Hi there, I am "+session['name']+" :)"
    dojo = Dojo.get_one()
    return render_template("result.html", 
        dojo = Dojo.get_one()
    )

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."
