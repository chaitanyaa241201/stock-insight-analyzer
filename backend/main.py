from fastapi import FastAPI
from pydantic import BaseModel
from pymongo import MongoClient
import os

app = FastAPI()

# Use environment variable for MongoDB connection
mongo_url = os.getenv("MONGO_URL", "mongodb://localhost:27017/")
client = MongoClient(mongo_url)
db = client["stockdb"]
collection = db["stocks"]

# Request Body Model
class Stock(BaseModel):
    name: str
    price: float
    change: float

@app.get("/")
def home():
    return {"message": "Welcome to Stock Insight Analyzer API"}

@app.get("/stocks")
def get_stocks():
    stocks = list(collection.find({}, {"_id": 0}))
    return stocks

@app.post("/stocks")
def add_stock(stock: Stock):
    collection.insert_one(stock.dict())
    return {"message": "Stock added"}

