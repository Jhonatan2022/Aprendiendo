from fastapi import APIRouter, Depends, Path, Query
from fastapi.responses import JSONResponse
from typing import List
from config.database import Session
from models.movie import Movie as MovieModel
from fastapi.encoders import jsonable_encoder
from middlewares.jwt_bearer import Auth
from services.services_movies import MovieService
from schemas.movie import Movie

movie_router = APIRouter()

# , dependencies=[Depends(Auth())]
@movie_router.get(
    "/movies",
    tags=["Movies"],
    response_model=List[Movie],
    dependencies=[Depends(Auth())],
)
def get_movies() -> List[Movie]:
    db = Session()

    # Obtenemos todas las películas de la base de datos
    result = MovieService(db).get_movies()

    # status_code: para devolver un código de estado (200: OK, 404: Not Found, 500: Internal Server Error, etc)
    return JSONResponse(content=jsonable_encoder(result), status_code=200)


@movie_router.get("/movies/{id}", tags=["Movies"], response_model=dict)
def get_movie(id: int = Path(ge=1)) -> dict:
    db = Session()

    # Obtenemos la película por el id
    result = MovieService(db).get_movie_id(id)

    # Si no se encuentra la película, devolvemos un mensaje
    if not result:
        return JSONResponse(content={"message": "Movie not found"}, status_code=404)

    # Si no se encuentra la película, devolvemos un mensaje
    return JSONResponse(content=jsonable_encoder(result), status_code=200)


@movie_router.get("/movies/", tags=["Movies"], response_model=List[Movie])
def get_movies_category(
    category: str = Query(min_length=6, max_length=20)
) -> List[Movie]:
    db = Session()

    # Obtenemos todas las películas de la base de datos
    result = MovieService(db).get_movies_category(category)

    # Si no se encuentra la película, devolvemos un mensaje
    if not result:
        return JSONResponse(content={"message": "Movie not found"}, status_code=404)

    # Si no se encuentra la película, devolvemos un mensaje
    return JSONResponse(content=jsonable_encoder(result), status_code=200)


# Metodo POST
@movie_router.post("/movies", tags=["Movies"], response_model=dict)
def add_movie(movie: Movie) -> dict:
    # Creamos una instancia de session
    db = Session()

    # Usamos el metodo add_movie de MovieService para agregar una película
    MovieService(db).add_movie(movie)

    # Devolvemos la lista de películas actualizada
    return JSONResponse(content={"message": "Movie added"}, status_code=201)


# Metodo PUT
@movie_router.put("/movies/{id}", tags=["Movies"], response_model=dict)
def update_movie(id: int, movie: Movie) -> dict:
    db = Session()

    # Obtenemos la película por el id
    result = MovieService(db).get_movie_id(id)

    # Si no se encuentra la película, devolvemos un mensaje
    if not result:
        return JSONResponse(content={"message": "Movie not found"}, status_code=404)

    # Actualizamos la película
    MovieService(db).update_movie(id, movie)

    # Si no se encuentra la película, devolvemos un mensaje
    return JSONResponse(content={"message": "Update success"}, status_code=200)


# Metodo DELETE
@movie_router.delete("/movies/{id}", tags=["Movies"], response_model=List[Movie])
def delete_movie(id: int) -> List[Movie]:
    db = Session()

    # Obtenemos la película por el id
    result = MovieService(db).get_movie_id(id)

    # Si no se encuentra la película, devolvemos un mensaje
    if not result:
        return JSONResponse(content={"message": "Movie not found"}, status_code=404)

    # Eliminamos la película
    MovieService(db).delete_movie(id)

    return JSONResponse(content={"message": "Delete success"}, status_code=200)
