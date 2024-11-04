create table if not exists usuarios (
    id serial primary key,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
    edad INT not null,
    sexo CHAR(1) not null
);

INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Jesus', 'Ramirez', 25, 'M');
INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Juan', 'Perez', 25, 'M');
INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES ('Pedro', 'Perez', 25, 'M');