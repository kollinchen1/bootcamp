from flask import Flask,render_template,session,redirect,request # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
app.secret_key = 'keep it secret, keep it safe' 


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    print(request.form)
    if 'count' in session:
        session['count'] +=1
        print("key 'count' exists!")
    else:
        session['count'] = 1
        print("key 'count' does NOT exist")
    return render_template("index.html",
        count = session['count'],
    )
@app.route('/2')          # The "@" decorator associates this route with the function immediately following
def increase2():
    if 'count' in session:
        session['count'] +=1
        print("key 'count' exists!")
    else:
        session['count'] = 1
        print("key 'count' does NOT exist")
    return redirect("/")	

@app.route('/r')          # The "@" decorator associates this route with the function immediately following
def reset():
    session['count'] = 0
    return redirect("/")	

@app.route('/increment', methods=['POST'])         
def checkout():
    print(request.form)
    session['count'] += int(request.form['increment']) - 1
    return redirect("/")

@app.route('/destroy_session')
def create_user():
    print(session)
    session.clear()		# clears all keys
    #session.pop('count')		# clears a specific key
    return redirect("/")	 
    

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.