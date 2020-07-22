from flask import Flask, render_template, jsonify, request
from flask_cors import CORS


app = Flask(__name__)


stocks = [
]

CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/', methods=['GET', 'POST'])
def yeet():
  response_object = {'status': 'success'}
  if request.method == 'POST':
    post_data = request.get_json()
    stocks.append({
      'Ticker': post_data.get('Ticker'),
      'Price': post_data.get('Price'),
    })
    response_object['message'] = 'Stock added'
  else:
    response_object['stocks'] = stocks
  return jsonify(response_object)
