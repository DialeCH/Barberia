from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb+srv://dialech:m10elmejor@barberia.ihnyu3o.mongodb.net/"
client = AsyncIOMotorClient(MONGO_URI)
db = client.barberia

def get_db():
    return db