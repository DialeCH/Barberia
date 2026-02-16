from fastapi import APIRouter, Depends
from pydantic import BaseModel
from datetime import datetime
from database.database import get_db

router = APIRouter()

class Cita(BaseModel):
    nombre: str
    correo: str
    telefono: str
    servicio: str
    fecha: datetime
    mensaje: str | None = None

@router.post("/")
async def crear_cita(cita: Cita, db=Depends(get_db)):
    result = await db.citas.insert_one(cita.dict())
    return {"mensaje": "Cita reservada con éxito", "id": str(result.inserted_id)}

@router.get("/")
async def listar_citas(db=Depends(get_db)):
    citas = []
    cursor = db.citas.find()
    async for cita in cursor:
        cita["_id"] = str(cita["_id"])
        citas.append(cita)
    return citas