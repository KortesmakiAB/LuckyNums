from flask import Flask, render_template, jsonify, request
from random import randint
import requests

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


###################################################
# API helper function

def make_error_dict(request):
    """Use form data to create error dictionary with nested dicts.
    Nested dicts contain name, validation conditional, and error message."""

    errors = {
        "errors": {}
    }

    name                = request.json.get('name')
    if not name or not name.strip():
        errors['errors']['name']  = 'Please enter a valid name.'

    year                = request.json.get('year')
    year                = year and 1900 <= int(year) <= 2000
    if not year:
        errors['errors']['year']  = 'Please enter a year from 1900 to 2000.'

    email               = request.json.get('email')
    email               = '@' in email and '.' in email
    if not email:
        errors['errors']['email']  = 'Please enter a valid email address.'

    color               = request.json.get('color')
    color               = color in {'red', 'green', 'orange', 'blue'}
    if not color:
        errors['errors']['color']  = 'Please choose 1 color: red, green, orange, or purple.'


    return errors if errors['errors'].values() else None   


###################################################
# API RESTful ROUTES

@app.route('/api/get-lucky-num', methods = ['POST'])
def handle_form_submit():
    """TODO"""
    
    errors          = make_error_dict(request)

    if errors:
        return (jsonify(errors))


    rand_num        = randint(1, 100)
    try:
        num_resp    = requests.get(f'http://numbersapi.com/{rand_num}/trivia')
    except:
        errors['bad request'] = 'Random number trivia not found. Please try again.'
        return (jsonify(errors))


    year            = request.json.get('year')
    try:
        yr_resp     = requests.get(f'http://numbersapi.com/{year}/year')
    except:
        errors['bad request'] = 'Year trivia not found. Please try again.'
        return (jsonify(errors))

    trivia = {
        "num":  {
            "fact": num_resp.text,
            "num":  rand_num
        },
        "year": {
            "fact": yr_resp.text,
            "year": year
        }        
    }
    
    return jsonify(trivia)
   
