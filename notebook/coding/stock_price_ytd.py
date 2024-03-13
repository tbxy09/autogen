# filename: stock_price_ytd.py
import yfinance as yf
import matplotlib.pyplot as plt

# Get the stock prices for META and TESLA YTD
meta = yf.Ticker("META")
tesla = yf.Ticker("TSLA")
meta_ytd = meta.history(period="ytd")["Close"]
tesla_ytd = tesla.history(period="ytd")["Close"]

# Create a line chart to plot the stock prices for META and TESLA YTD
plt.plot(meta_ytd, label="META")
plt.plot(tesla_ytd, label="TESLA")

# Add a title and axis labels to the chart
plt.title("Stock Price Change YTD")
plt.xlabel("Date")
plt.ylabel("Price")

# Add a legend to the chart
plt.legend()

# Save the chart to stock_price_ytd.png
plt.savefig("stock_price_ytd.png")