CREATE TABLE IF NOT EXISTS contacto(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombre TEXT,
    apellidos TEXT,
    email TEXT);

INSERT INTO contacto
    ( nombre, apellidos, email) 
    VALUES ('Juan','Perez Munoz','jpm@gmail.com');

INSERT INTO contacto
    ( nombre, apellidos, email) 
    VALUES ('Ana','Silva Aguilera','anaSilva.a@gmail.com');

CREATE TABLE IF NOT EXISTS usuario(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name_user TEXT,
    user TEXT,
    pass TEXT);

INSERT INTO usuario
    ( name_user, user, pass) 
    VALUES ('registrapp','usuario01','1234');
