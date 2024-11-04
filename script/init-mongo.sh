# #!/bin/bash
# echo "Esperando a que MongoDB esté listo..."

# # Aumenta el tiempo de espera o el número de intentos
# max_retries=30  # Cambia según tus necesidades
# retry_count=0

# until mongo --host db --eval "db.stats()" &> /dev/null || [ $retry_count -eq $max_retries ]; do
#     echo "MongoDB no está listo aún. Reintentando en 2 segundos..."
#     sleep 2
#     retry_count=$((retry_count + 1))
# done

# if [ $retry_count -eq $max_retries ]; then
#     echo "Error: MongoDB no está listo después de varios intentos."
#     exit 1
# fi

# echo "MongoDB está listo. Cargando datos iniciales..."
# mongoimport --host db --db database --collection usuarios --type json --file /data/mongo_data.json --jsonArray
# echo "Datos iniciales cargados correctamente."


#!/bin/bash
until mongosh --host db --eval "db.stats()" &> /dev/null; do
    echo "MongoDB no está listo aún. Reintentando en 2 segundos..."
    sleep 2
done

mongosh --host mongo <<EOF
use databse
db.usuarios.insertMany($cat /data/data.json))
EOF

echo "Datos iniciales cargados correctamente."