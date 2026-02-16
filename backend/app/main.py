from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import citas

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(citas.router, prefix="/citas", tags=["Citas"])