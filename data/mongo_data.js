// data/mongo_data.js
db = db.getSiblingDB('database'); // Reemplaza 'database' con el nombre de la base de datos si es diferente
db.usuarios.insertMany([
    {
        "nombre": "MONGO",
        "apellido": "Ramirez",
        "edad": 25,
        "sexo": "M"
    },
    {
        "nombre": "Maria",
        "apellido": "Perez",
        "edad": 30,
        "sexo": "F"
    },
    {
        "nombre": "Pedro",
        "apellido": "Gomez",
        "edad": 35,
        "sexo": "M"
    }
]);