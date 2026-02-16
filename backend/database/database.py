from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb+srv://usuario:password@cluster.mongodb.net/barberia"
client = AsyncIOMotorClient(MONGO_URI)
db = client.barberia

def get_db():
    return db