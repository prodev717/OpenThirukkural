from flask import Flask,render_template,render_template_string,request
import json
from datetime import date
from random import randint
app = Flask(__name__)
file = 0
with open("allKural.json","r",encoding="utf8") as f:
	file = json.load(f)

@app.route("/")
def red():
	return render_template_string("<h1><a href="+request.base_url+"home>main page</a></h1>")

@app.route("/home")
@app.route("/documentation")
@app.route("/about")
@app.route("/contact")
def home():
	return render_template("index.html",data=date.today().year)

@app.route("/randomKural")
def kural():
	i = randint(0, 1330)
	return file["allKural"][i]

@app.route("/kuralNo/<no>")
def kuralNo(no):
	return file["allKural"][int(no)-1]

@app.route("/kuralNo/np/<no>")
def npkuralNo(no):
	return render_template("kuralpage.html",data=file["allKural"][int(no)-1])

if __name__ == '__main__':
	app.run(debug=True,host="0.0.0.0",port=8000)
