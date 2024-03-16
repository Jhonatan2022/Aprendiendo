from jwt import encode, decode


# Creamos una función para generar el token
def create_token(data: dict):
    # key: clave secreta para codificar los datos
    # algorithm: algoritmo de codificación
    token: str = encode(payload=data, key="secret", algorithm="HS256")

    return token


# Creamos la funcion para validar el token
def validate_token(token: str):
    data: dict = decode(token, key="secret", algorithms=["HS256"])

    return data