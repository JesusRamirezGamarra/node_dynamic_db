CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    sexo CHAR(1) NOT NULL
);

INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Juan', 'Ramirez', 25, 'M');
INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Juan', 'Perez', 25, 'M');
INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Pedro', 'Perez', 25, 'M');
