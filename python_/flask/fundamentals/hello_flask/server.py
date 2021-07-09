from flask import Flask, render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template("index.html")
    return 'Hello World!'  # Return the string 'Hello World!' as a response
# Run the app in debug mode.
@app.route('/hello')
def index():
    return "Hello!"


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 