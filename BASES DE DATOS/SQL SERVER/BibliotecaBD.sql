CREATE DATABASE SupermercadoBD
USE SupermercadoBD

CREATE TABLE Categorias (
    id_categorias INT PRIMARY KEY,
    nombre_categorias VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Productos (
    id_productos INT PRIMARY KEY,
    nombre_producto VARCHAR(150) NOT NULL,
    id_categoria INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    fecha_vencimiento DATE,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categorias)
);

CREATE TABLE Proveedores (
    id_proveedor INT PRIMARY KEY,
    nombre_proveedor VARCHAR(150) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(150),
    direccion VARCHAR(200)
);

CREATE TABLE ControlCalidad (
    id_control INT PRIMARY KEY,
    id_producto INT NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES Productos(id_productos)
);

CREATE TABLE Facturacion (
    id_factura INT PRIMARY KEY,
    fecha DATE NOT NULL,
    id_producto INT NOT NULL,
    id_detalle INT NOT NULL,
    total DECIMAL(12,2) NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES Productos(id_productos)
);

CREATE TABLE Roles (
    id_rol INT PRIMARY KEY,
    nombre_rol VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE DetalleFactura (
    id_detalle INT PRIMARY KEY,
    cantidad_productos INT NOT NULL
);

CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY,
    contraseña VARCHAR(255) NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);
