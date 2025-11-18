CREATE DATABASE pruebas_tablas
USE pruebas_tablas

-- crear tabla
CREATE TABLE productos(
	cod int,
	nom varchar(50),
	cantidad int,
	primary key(cod, nom)
)
-- elimina una tabla
DROP TABLE productos

-- adicionar un campo en la tabla
ALTER TABLE productos
ADD val_unit money

-- eliminar un campo en la tabla
ALTER TABLE productos
DROP COLUMN val_unit

-- modificar el tipo de dato de una campo
ALTER TABLE productos
ALTER COLUMN val_unit FLOAT

-- crear tabla con llaves compuestas
CREATE TABLE detalle_facura_productos(
	id int primary key,
	cod_produc int,
	nom varchar(50),
	FOREIGN KEY(cod_produc, nom) REFERENCES productos
)

select * from productos

INSERT INTO productos(cod, nom, cantidad, val_unit) VALUES (1, 'usb', 20, 15000)
INSERT INTO productos(cod, nom, cantidad, val_unit) VALUES (1, 'usb 1', 30, 20000)
INSERT INTO productos(cod, nom, cantidad, val_unit) VALUES (2, 'usb 2', 25, 16000)
INSERT INTO productos(cod, nom, cantidad, val_unit) VALUES (2, 'usb 3', 90, 15800)


delete from productos where cod = 1

UPDATE productos SET cantidad = 80 WHERE cantidad = 30



