# Barbería Web App 💈

Sistema de gestión de citas para una barbería.  
Permite a los clientes reservar citas, ver disponibilidad y a los barberos administrar su agenda.

---

## 🚀 Características principales

- Reservar citas en línea.
- Visualizar disponibilidad en un calendario.
- Cancelar o modificar citas.
- Gestión de clientes y barberos.
- Backend en **Python (FastAPI)**.
- Base de datos en **MongoDB Atlas**.
- Frontend en **JavaScript (HTML, CSS, JS)**.

---

## 🛠️ Tecnologías utilizadas

- **Frontend:** HTML, CSS, JavaScript.
- **Backend:** Python + FastAPI.
- **Base de datos:** MongoDB Atlas.
- **Hosting:**
    - Frontend → Vercel
    - Backend → Render
    - Base de datos → MongoDB Atlas

---

## 📂 Estructura del proyecto

/frontend ├── index.html ├── styles.css └── app.js
/backend ├── main.py ├── requirements.txt └── routes/ └── citas.py
/database └── mongo_collections.md

---

## 🗂️ Misiones de desarrollo

1. **Definir alcance del proyecto** → Reservas, disponibilidad, cancelaciones.
2. **Diseñar interfaz** → Formularios y calendario.
3. **Configurar backend en FastAPI** → Endpoints para citas.
4. **Conectar con MongoDB Atlas** → Colecciones: clientes, barberos, citas.
5. **Integrar frontend y backend** → Peticiones `fetch` desde JS.
6. **Desplegar frontend en Vercel**.
7. **Desplegar backend en Render**.
8. **Configurar base de datos en MongoDB Atlas**.
9. **Pruebas completas** → Reservar, listar y cancelar citas.
10. **Optimización futura** → Autenticación, notificaciones, interfaz avanzada.

---

## 📦 Instalación y uso

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/usuario/barberia-web.git
    ```
2. Instalar dependencias del backend:
   pip install -r requirements.txt
3. Configurar variables de entorno para MongoDB Atlas:
   MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/barberia
4. Ejecutar backend:
   uvicorn main:app --reload
5. Abrir frontend en navegador o desplegar en Vercel.

📌 Próximas mejoras

- Autenticación de usuarios (clientes/barberos).
- Notificaciones por correo o WhatsApp.
- Panel administrativo para barberos.
- Diseño responsivo para móviles.

📄 Licencia
Este proyecto se distribuye bajo la licencia MIT.
Puedes usarlo, modificarlo y compartirlo libremente.

---
