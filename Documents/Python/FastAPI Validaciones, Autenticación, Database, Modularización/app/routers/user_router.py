from fastapi import APIRouter
from utils.jwt_manager import create_token
from fastapi.responses import JSONResponse
from schemas.user import User

user_router = APIRouter()

# Creamos una ruta para que el usuario se pueda loguear y le devolvemos un token
@user_router.post("/login", tags=["Auth"])
def login(user: User):
    if user.email == "admin@gmail.com" and user.password == "admin":
        token: str = create_token(user.dict())

        return JSONResponse(status_code=200, content=token)