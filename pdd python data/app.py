from flask import Flask
app = Flask(__name__)
from users import *
from flask_cors import CORS
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!'