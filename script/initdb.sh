until mongosh --host mongo --eval "print("Esperando a que levante mongo ...")" &> /dev/null; do
    sleep 3
done

mongosh --host mongo <<EOF
use database
db,usuarios.insertMany($cat /data/data.json)
EOF

echo "Datos iniciales cargados correctamente."