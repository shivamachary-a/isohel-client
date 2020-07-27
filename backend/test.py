import requests
import json
from datetime import date, timedelta


def getAdjClose(ticker):
  today = date.today()
  base = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="
  ti = ticker
  end = "&apikey=A1VFP8M71VTXQIVO"
  url = base + ti + end
  response = requests.get(url)
  parsed = json.loads(response.text)

  i = 0
  while i < 10:
    try:
      d = date.today() - timedelta(days=i)
      print(parsed['Time Series (Daily)'][str(d)]['4. close'])
      i = i + 1
    except KeyError:
      i = i + 1