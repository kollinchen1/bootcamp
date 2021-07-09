from flask import Flask,render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/play')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template("index.html", number  = int(4),color = '#9fc5f8')  # Return the string 'Hello World!' as a response

@app.route('/play/<number>')
def box_id(number):
    return render_template("index.html", number = int(number),color = '#9fc5f8')

@app.route('/play/<number>/<color>')
def box_id_color(number,color):
    return render_template("index.html",number = int(number),color = color)


@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.