# filename: stock_comparison.py
import datetime
import yfinance as yf

# Get the current date
today = datetime.date.today()

# Get the stock prices for META and TESLA
meta = yf.Ticker("META")
tesla = yf.Ticker("TSLA")

# Get the stock prices at the beginning of the year
meta_start = meta.history(start="2021-01-01", end="2021-01-01")["Close"][0]
tesla_start = tesla.history(start="2021-01-01", end="2021-01-01")["Close"][0]

# Get the current stock prices
meta_current = meta.history(start=today, end=today)["Close"][0]
tesla_current = tesla.history(start=today, end=today)["Close"][0]

# Calculate the year-to-date gain for META and TESLA
meta_gain = (meta_current - meta_start) / meta_start * 100
tesla_gain = (tesla_current - tesla_start) / tesla_start * 100

# Compare the year-to-date gain for META and TESLA
if meta_gain > tesla_gain:
    print("META has a higher year-to-date gain than TESLA.")
elif meta_gain < tesla_gain:
    print("TESLA has a higher year-to-date gain than META.")
else:
    print("META and TESLA have the same year-to-date gain.")