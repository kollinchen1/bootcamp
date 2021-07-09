from flask import Flask,render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template("index.html", row  = 8, col = 8, color1="black",color2="red")  # Return the string 'Hello World!' as a response

@app.route('/<number>')
def call_col(number):
    return render_template("index.html", row = 8, col = int(number),color1="black",color2="red")

@app.route('/<row>/<col>')
def call_rowNcol(row,col):
    return render_template("index.html", row = int(row), col = int(col),color1="black",color2="red")

@app.route('/<row>/<col>/<color1>')
def call_rowColColor(row,col,color1):
    if color1 == "blue":
        color2 = "red"
    else:
        color2 = "blue"
    return render_template("index.html", row = int(row), col = int(col),color1=color1,color2=color2)

@app.route('/<row>/<col>/<color1>/<color2>')
def call_rowColColor2(row,col,color1,color2):
    return render_template("index.html", row = int(row), col = int(col),color1=color1,color2=color2)

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again."

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.