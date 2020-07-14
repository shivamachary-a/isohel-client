from flask import Flask, render_template, jsonify
from flask_cors import CORS


app = Flask(__name__)


CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/', methods=['GET'])
def hello():
  return jsonify('penis!')