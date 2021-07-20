from flask import render_template, redirect, request
from dojo_app import app
from ..models.email import Email

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    print(request.form)
    return render_template("index.html"
    )

@app.route('/process', methods=['POST'])  
def gotAnswers():
    if not Email.validate(request.form):
        return redirect("/")
    print(request.form)
    Email.create(request.form)
    return redirect("/success")

@app.route('/success')          # The "@" decorator associates this route with the function immediately following
def print_result():
    return render_template("result.html", 
        emails = Email.get_all()
    )

@app.route("/emails/<int:email_id>/delete")
def delete_email(email_id):
    Email.delete({"id": email_id})
    return redirect("/success")

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."
