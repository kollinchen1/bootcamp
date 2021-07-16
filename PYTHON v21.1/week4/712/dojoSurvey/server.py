from flask import Flask,render_template,session,redirect,request # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
app.secret_key = 'keep it secret, keep it safe' 


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    print(request.form)
    return render_template("index.html"
    )

@app.route('/process', methods=['POST'])  
def gotAnswers():
    print(request.form)
    if request.form['name'] !="":
        print("here 16")
        session['name'] = request.form['name']
    else:
        return redirect("/")
    session['dojo_location'] = request.form['dojo_location']
    session['favorite_language'] = request.form['favorite_language']
    session['comment'] = request.form['comment']
    return redirect("/result")

@app.route('/result')          # The "@" decorator associates this route with the function immediately following
def print_result():
    print(session['name'])
    print(session['dojo_location'])
    print(session['favorite_language'])
    print(session['comment'])
    if session['comment'] !="":
        comment = session['comment']
    else:
        comment = "Hi there, I am "+session['name']+" :)"
    return render_template("result.html", 
        name = session['name'], 
        location = session['dojo_location'], 
        language = session['favorite_language']+"!!!!!!",
        comment = comment
    )


@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.