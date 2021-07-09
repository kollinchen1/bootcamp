from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def print_dojo():
    return 'Dojo!'  
    
@app.route('/say/<name>')
def print_name(name):
    print(name)
    return (f"Hi {name.title()}!")

@app.route('/repeat/<id>/<name>')
def print_name_id(name,id):
    names = ""
    for i in range(int(id)):
        names+= name +" "
    return names
@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.