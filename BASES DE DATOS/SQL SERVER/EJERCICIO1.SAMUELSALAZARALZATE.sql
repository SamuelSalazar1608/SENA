CREATE DATABASE TiendaOnline
use TiendaOnline

CREATE TABLE Proveedores (
    idProveedores INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    contacto VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE Productos (
    idProductos INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    idProveedores INT,
    FOREIGN KEY (idProveedores) REFERENCES Proveedores(idProveedores)
);

CREATE TABLE Clientes (
    idClientes INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(20),
    direccion VARCHAR(200)
);

CREATE TABLE Pedidos (
    idPedidos INT PRIMARY KEY,
    idClientes INT,
    fechaPedido DATE,
    total DECIMAL(10,2),
    estado VARCHAR(50),
    FOREIGN KEY (idClientes) REFERENCES Clientes(idClientes)
);

CREATE TABLE DetallesPedido (
    idDetallesPedido INT PRIMARY KEY,
    idPedidos INT,
    idProductos INT,
    cantidad INT,
    precioUnitario DECIMAL(10,2),
    FOREIGN KEY (idPedidos) REFERENCES Pedidos(idPedidos),
    FOREIGN KEY (idProductos) REFERENCES Productos(idProductos)
);

CREATE TABLE Facturas (
    idFacturas INT PRIMARY KEY,
    idPedidos INT,
    fechaEmision DATE,
    montoTotal DECIMAL(10,2),
    detalles VARCHAR(255),
    FOREIGN KEY (idPedidos) REFERENCES Pedidos(idPedidos)
);

CREATE TABLE MetodosPago (
    idMetodosPago INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Pagos (
    idPagos INT PRIMARY KEY,
    idPedidos INT,
    idMetodosPago INT,
    monto DECIMAL(10,2),
    fechaPago DATE,
    estado VARCHAR(50),
    FOREIGN KEY (idPedidos) REFERENCES Pedidos(idPedidos),
    FOREIGN KEY (idMetodosPago) REFERENCES MetodosPago(idMetodosPago)
);

-- ==========================================
-- INSERTS PARA PROVEEDORES (30 registros)
-- ==========================================
INSERT INTO Proveedores (idProveedores, nombre, contacto, email) VALUES
(1, 'TechDistribuciones', 'Carlos Gómez', 'carlos@techdistrib.com'),
(2, 'GlobalMarket', 'Ana Torres', 'ana@globalmarket.com'),
(3, 'SuministrosXYZ', 'Luis Herrera', 'luis@suminxyz.com'),
(4, 'AlfaProveedores', 'María Pérez', 'maria@alfaprov.com'),
(5, 'Distribuciones Andes', 'Jorge Morales', 'jorge@andes.com'),
(6, 'ElectroWorld', 'Sofía Ramírez', 'sofia@electroworld.com'),
(7, 'OfficeSupply', 'Ricardo Soto', 'ricardo@officesupply.com'),
(8, 'MegaProveeduría', 'Laura Díaz', 'laura@megaprov.com'),
(9, 'InsumosLatam', 'Fernando Torres', 'fernando@insumoslatam.com'),
(10, 'PaperPlus', 'Gabriela López', 'gabriela@paperplus.com'),
(11, 'TechnoParts', 'Oscar Ruiz', 'oscar@technoparts.com'),
(12, 'IndustrialGroup', 'Carmen Ortega', 'carmen@industrial.com'),
(13, 'MarketCentral', 'Pedro Sánchez', 'pedro@marketcentral.com'),
(14, 'EcoProveedores', 'Daniela Rojas', 'daniela@ecoprov.com'),
(15, 'SoftDistribuciones', 'Hugo Velásquez', 'hugo@softdis.com'),
(16, 'ServiciosGlobales', 'Paula Castillo', 'paula@serviciosglobales.com'),
(17, 'DataSupply', 'Juan Esteban', 'juan@dataprov.com'),
(18, 'CompuWorld', 'Verónica Gil', 'vero@compuworld.com'),
(19, 'MaxiProveedores', 'Andrés González', 'andres@maxiprov.com'),
(20, 'InnovaDistribuciones', 'Felipe Navarro', 'felipe@innovadis.com'),
(21, 'QuickSupplies', 'Lorena Duarte', 'lorena@quicksup.com'),
(22, 'Tecnored', 'Manuel Vargas', 'manuel@tecnored.com'),
(23, 'Proveeduría Express', 'César Ramírez', 'cesar@provexpress.com'),
(24, 'DistribuTech', 'Alejandra Silva', 'alejandra@distributech.com'),
(25, 'Papelería Global', 'Roberto Peña', 'roberto@papeglobal.com'),
(26, 'OfficeMax', 'Natalia Blanco', 'natalia@officemax.com'),
(27, 'LatamInsumos', 'Diego Camacho', 'diego@latamins.com'),
(28, 'IndustriasNova', 'Marcela Herrera', 'marcela@novaprov.com'),
(29, 'MegaDistribuciones', 'Pablo Jiménez', 'pablo@megadis.com'),
(30, 'EcoTech', 'Isabel Ruiz', 'isabel@ecotech.com');

SELECT * FROM Proveedores

-- ==========================================
-- INSERTS PARA PRODUCTOS (30 registros)
-- ==========================================
INSERT INTO Productos (idProductos, nombre, descripcion, precio, stock, idProveedores) VALUES
(1, 'Laptop Lenovo', 'Laptop 15" 8GB RAM 256GB SSD', 2500.00, 50, 1),
(2, 'Impresora HP', 'Impresora multifuncional', 700.00, 30, 2),
(3, 'Teclado Logitech', 'Teclado inalámbrico', 120.00, 100, 3),
(4, 'Mouse Microsoft', 'Mouse óptico inalámbrico', 80.00, 200, 4),
(5, 'Monitor Samsung', 'Monitor 24" LED', 900.00, 40, 5),
(6, 'Disco Duro Seagate', 'Disco duro externo 1TB', 350.00, 60, 6),
(7, 'Memoria USB Kingston', 'Memoria 64GB', 60.00, 300, 7),
(8, 'Router TP-Link', 'Router inalámbrico', 180.00, 45, 8),
(9, 'Silla ergonómica', 'Silla de oficina ajustable', 600.00, 20, 9),
(10, 'Escritorio OfficePro', 'Escritorio madera 1.5m', 750.00, 15, 10),
(11, 'Auriculares Sony', 'Auriculares Bluetooth', 250.00, 80, 11),
(12, 'Cámara Logitech', 'Webcam HD', 220.00, 35, 12),
(13, 'Proyector Epson', 'Proyector 3000 lúmenes', 1200.00, 12, 13),
(14, 'Tablet Samsung', 'Tablet Galaxy Tab A7', 950.00, 25, 14),
(15, 'Smartphone Xiaomi', 'Redmi Note 11', 1100.00, 40, 15),
(16, 'Cargador Universal', 'Cargador laptop 65W', 90.00, 100, 16),
(17, 'Fuente de poder', 'Fuente 600W certificada', 320.00, 70, 17),
(18, 'Tarjeta Gráfica Nvidia', 'RTX 3060 12GB', 2800.00, 10, 18),
(19, 'Placa Madre ASUS', 'ATX gaming', 1500.00, 15, 19),
(20, 'Memoria RAM Corsair', 'DDR4 16GB 3200MHz', 700.00, 50, 20),
(21, 'Disco SSD Kingston', 'SSD 512GB', 400.00, 75, 21),
(22, 'Cable HDMI', 'Cable 2m 4K', 30.00, 200, 22),
(23, 'Adaptador USB-C', 'Adaptador multipuerto', 70.00, 120, 23),
(24, 'Switch Cisco', 'Switch 24 puertos', 2500.00, 8, 24),
(25, 'Servidor Dell', 'Servidor rack 2U', 15000.00, 5, 25),
(26, 'Proyector BenQ', 'Proyector HD 3500 lúmenes', 1800.00, 7, 26),
(27, 'Laptop HP', 'Laptop 14" 16GB RAM 512GB SSD', 3200.00, 20, 27),
(28, 'Impresora Canon', 'Impresora láser', 850.00, 25, 28),
(29, 'Monitor LG', 'Monitor 27" 2K', 1400.00, 18, 29),
(30, 'Auriculares Bose', 'Auriculares con cancelación', 1200.00, 30, 30);

SELECT * FROM Productos

-- ==========================================
-- INSERTS PARA CLIENTES (30 registros)
-- ==========================================
INSERT INTO Clientes (idClientes, nombre, email, telefono, direccion) VALUES
(1, 'Juan Pérez', 'juan.perez@email.com', '3001112233', 'Calle 10 #12-34, Bogotá'),
(2, 'María López', 'maria.lopez@email.com', '3002223344', 'Carrera 15 #45-67, Medellín'),
(3, 'Carlos Ramírez', 'carlos.ramirez@email.com', '3003334455', 'Av. 68 #23-45, Cali'),
(4, 'Ana Torres', 'ana.torres@email.com', '3004445566', 'Calle 20 #30-15, Barranquilla'),
(5, 'Jorge Morales', 'jorge.morales@email.com', '3005556677', 'Carrera 7 #40-20, Bucaramanga'),
(6, 'Laura Díaz', 'laura.diaz@email.com', '3006667788', 'Calle 50 #25-33, Cartagena'),
(7, 'Luis Herrera', 'luis.herrera@email.com', '3007778899', 'Av. Caracas #12-25, Bogotá'),
(8, 'Gabriela López', 'gabriela.lopez@email.com', '3008889900', 'Carrera 80 #60-45, Cali'),
(9, 'Ricardo Soto', 'ricardo.soto@email.com', '3011112233', 'Calle 9 #7-15, Medellín'),
(10, 'Paula Castillo', 'paula.castillo@email.com', '3012223344', 'Calle 34 #56-12, Bogotá'),
(11, 'Fernando Torres', 'fernando.torres@email.com', '3013334455', 'Carrera 12 #34-67, Barranquilla'),
(12, 'Carmen Ortega', 'carmen.ortega@email.com', '3014445566', 'Av. Boyacá #45-90, Bogotá'),
(13, 'Andrés González', 'andres.gonzalez@email.com', '3015556677', 'Carrera 25 #20-45, Cali'),
(14, 'Natalia Blanco', 'natalia.blanco@email.com', '3016667788', 'Calle 22 #45-60, Medellín'),
(15, 'Hugo Velásquez', 'hugo.velasquez@email.com', '3017778899', 'Carrera 9 #70-20, Bogotá'),
(16, 'Isabel Ruiz', 'isabel.ruiz@email.com', '3021112233', 'Av. 30 #15-40, Bucaramanga'),
(17, 'Pablo Jiménez', 'pablo.jimenez@email.com', '3022223344', 'Calle 80 #23-12, Cali'),
(18, 'Lorena Duarte', 'lorena.duarte@email.com', '3023334455', 'Carrera 50 #70-25, Medellín'),
(19, 'Felipe Navarro', 'felipe.navarro@email.com', '3024445566', 'Calle 12 #9-30, Bogotá'),
(20, 'Oscar Ruiz', 'oscar.ruiz@email.com', '3025556677', 'Carrera 100 #80-45, Cali'),
(21, 'Verónica Gil', 'veronica.gil@email.com', '3026667788', 'Av. Las Palmas #23-90, Medellín'),
(22, 'Marcela Herrera', 'marcela.herrera@email.com', '3027778899', 'Calle 15 #20-80, Barranquilla'),
(23, 'Pedro Sánchez', 'pedro.sanchez@email.com', '3031112233', 'Carrera 33 #45-70, Bogotá'),
(24, 'Sofía Ramírez', 'sofia.ramirez@email.com', '3032223344', 'Calle 19 #22-15, Cali'),
(25, 'Diego Camacho', 'diego.camacho@email.com', '3033334455', 'Carrera 80 #50-10, Medellín'),
(26, 'Alejandra Silva', 'alejandra.silva@email.com', '3034445566', 'Calle 45 #23-70, Bogotá'),
(27, 'Daniela Rojas', 'daniela.rojas@email.com', '3035556677', 'Av. Santander #33-25, Bucaramanga'),
(28, 'Manuel Vargas', 'manuel.vargas@email.com', '3036667788', 'Carrera 12 #12-40, Cartagena'),
(29, 'Roberto Peña', 'roberto.pena@email.com', '3037778899', 'Calle 30 #60-15, Cali'),
(30, 'César Ramírez', 'cesar.ramirez@email.com', '3041112233', 'Carrera 7 #33-25, Bogotá');

SELECT * FROM Clientes

-- ==========================================
-- INSERTS PARA PEDIDOS (30 registros)
-- ==========================================
INSERT INTO Pedidos (idPedidos, idClientes, fechaPedido, total, estado) VALUES
(1, 1, '2023-01-10', 3500.00, 'Pendiente'),
(2, 2, '2023-01-12', 1800.00, 'Pagado'),
(3, 3, '2023-01-15', 2500.00, 'Pendiente'),
(4, 4, '2023-01-18', 1200.00, 'Enviado'),
(5, 5, '2023-01-20', 2800.00, 'Pagado'),
(6, 6, '2023-01-25', 950.00, 'Pendiente'),
(7, 7, '2023-01-28', 1400.00, 'Enviado'),
(8, 8, '2023-02-01', 2200.00, 'Pendiente'),
(9, 9, '2023-02-05', 3000.00, 'Pagado'),
(10, 10, '2023-02-08', 1750.00, 'Enviado'),
(11, 11, '2023-02-12', 4000.00, 'Pendiente'),
(12, 12, '2023-02-14', 950.00, 'Pagado'),
(13, 13, '2023-02-18', 600.00, 'Pendiente'),
(14, 14, '2023-02-20', 1800.00, 'Pagado'),
(15, 15, '2023-02-25', 1250.00, 'Enviado'),
(16, 16, '2023-02-28', 2200.00, 'Pendiente'),
(17, 17, '2023-03-03', 1700.00, 'Pagado'),
(18, 18, '2023-03-06', 2600.00, 'Pendiente'),
(19, 19, '2023-03-08', 3400.00, 'Pagado'),
(20, 20, '2023-03-12', 800.00, 'Enviado'),
(21, 21, '2023-03-15', 900.00, 'Pendiente'),
(22, 22, '2023-03-18', 1200.00, 'Pagado'),
(23, 23, '2023-03-20', 1800.00, 'Pendiente'),
(24, 24, '2023-03-25', 1500.00, 'Pagado'),
(25, 25, '2023-03-28', 2600.00, 'Pendiente'),
(26, 26, '2023-04-02', 2000.00, 'Enviado'),
(27, 27, '2023-04-06', 3100.00, 'Pagado'),
(28, 28, '2023-04-10', 950.00, 'Pendiente'),
(29, 29, '2023-04-12', 1600.00, 'Enviado'),
(30, 30, '2023-04-15', 2800.00, 'Pagado');

SELECT * FROM Pedidos

-- ==========================================
-- INSERTS PARA DETALLESPEDIDO (30 registros)
-- ==========================================
INSERT INTO DetallesPedido (idDetallesPedido, idPedidos, idProductos, cantidad, precioUnitario) VALUES
(1, 1, 1, 1, 2500.00),
(2, 1, 3, 2, 120.00),
(3, 2, 5, 2, 900.00),
(4, 3, 2, 1, 700.00),
(5, 3, 6, 2, 350.00),
(6, 4, 7, 5, 60.00),
(7, 5, 10, 2, 750.00),
(8, 6, 14, 1, 950.00),
(9, 7, 29, 1, 1400.00),
(10, 8, 8, 2, 180.00),
(11, 8, 11, 2, 250.00),
(12, 9, 27, 1, 3200.00),
(13, 10, 12, 1, 220.00),
(14, 10, 4, 5, 80.00),
(15, 11, 18, 1, 2800.00),
(16, 12, 15, 1, 1100.00),
(17, 13, 9, 1, 600.00),
(18, 14, 20, 2, 700.00),
(19, 15, 21, 2, 400.00),
(20, 16, 25, 1, 15000.00),
(21, 17, 28, 2, 850.00),
(22, 18, 13, 1, 1200.00),
(23, 19, 24, 1, 2500.00),
(24, 20, 22, 4, 30.00),
(25, 21, 23, 3, 70.00),
(26, 22, 19, 1, 1500.00),
(27, 23, 16, 2, 90.00),
(28, 24, 26, 1, 1800.00),
(29, 25, 30, 2, 1200.00),
(30, 26, 17, 3, 320.00);

SELECT * FROM DetallesPedido

-- ==========================================
-- INSERTS PARA FACTURAS (30 registros)
-- ==========================================
INSERT INTO Facturas (idFacturas, idPedidos, fechaEmision, montoTotal, detalles) VALUES
(1, 1, '2023-01-11', 3500.00, 'Compra laptop y teclado'),
(2, 2, '2023-01-13', 1800.00, 'Compra monitores'),
(3, 3, '2023-01-16', 2500.00, 'Compra impresora y disco duro'),
(4, 4, '2023-01-19', 1200.00, 'Compra memorias USB'),
(5, 5, '2023-01-21', 2800.00, 'Compra escritorio'),
(6, 6, '2023-01-26', 950.00, 'Compra tablet'),
(7, 7, '2023-01-29', 1400.00, 'Compra monitor LG'),
(8, 8, '2023-02-02', 2200.00, 'Compra router y auriculares'),
(9, 9, '2023-02-06', 3000.00, 'Compra laptop HP'),
(10, 10, '2023-02-09', 1750.00, 'Compra webcam y mouse'),
(11, 11, '2023-02-13', 4000.00, 'Compra tarjeta gráfica'),
(12, 12, '2023-02-15', 950.00, 'Compra smartphone'),
(13, 13, '2023-02-19', 600.00, 'Compra silla ergonómica'),
(14, 14, '2023-02-21', 1800.00, 'Compra memorias RAM'),
(15, 15, '2023-02-26', 1250.00, 'Compra SSD'),
(16, 16, '2023-03-01', 2200.00, 'Compra servidor Dell'),
(17, 17, '2023-03-04', 1700.00, 'Compra impresora Canon'),
(18, 18, '2023-03-07', 2600.00, 'Compra proyector Epson'),
(19, 19, '2023-03-09', 3400.00, 'Compra switch Cisco'),
(20, 20, '2023-03-13', 800.00, 'Compra cables HDMI'),
(21, 21, '2023-03-16', 900.00, 'Compra adaptadores USB-C'),
(22, 22, '2023-03-19', 1200.00, 'Compra placa madre'),
(23, 23, '2023-03-21', 1800.00, 'Compra cargadores universales'),
(24, 24, '2023-03-26', 1500.00, 'Compra proyector BenQ'),
(25, 25, '2023-03-29', 2600.00, 'Compra auriculares Bose'),
(26, 26, '2023-04-03', 2000.00, 'Compra fuente de poder'),
(27, 27, '2023-04-07', 3100.00, 'Compra laptop Lenovo'),
(28, 28, '2023-04-11', 950.00, 'Compra tablet Samsung'),
(29, 29, '2023-04-13', 1600.00, 'Compra monitor Samsung'),
(30, 30, '2023-04-16', 2800.00, 'Compra smartphone Xiaomi');

SELECT * FROM Facturas	

-- ==========================================
-- INSERTS PARA METODOSPAGO (30 registros)
-- ==========================================
INSERT INTO MetodosPago (idMetodosPago, nombre) VALUES
(1, 'Tarjeta de Crédito'),
(2, 'Tarjeta de Débito'),
(3, 'Efectivo'),
(4, 'Transferencia Bancaria'),
(5, 'PayPal'),
(6, 'Nequi'),
(7, 'Daviplata'),
(8, 'PSE'),
(9, 'Cheque'),
(10, 'Bitcoin'),
(11, 'Ethereum'),
(12, 'Bono de Regalo'),
(13, 'Crédito a 30 días'),
(14, 'Crédito a 60 días'),
(15, 'Apple Pay'),
(16, 'Google Pay'),
(17, 'Stripe'),
(18, 'Wise'),
(19, 'Western Union'),
(20, 'Criptomoneda USDT'),
(21, 'Zelle'),
(22, 'Pagos Seguros Online'),
(23, 'Tarjeta Empresarial'),
(24, 'Tarjeta Virtual'),
(25, 'Pago Contra Entrega'),
(26, 'Débito Automático'),
(27, 'Pago recurrente'),
(28, 'MercadoPago'),
(29, 'Samsung Pay'),
(30, 'Otra');

SELECT * FROM MetodosPago

-- ==========================================
-- INSERTS PARA PAGOS (30 registros)
-- ==========================================
INSERT INTO Pagos (idPagos, idPedidos, idMetodosPago, monto, fechaPago, estado) VALUES
(1, 1, 1, 3500.00, '2023-01-11', 'Pagado'),
(2, 2, 2, 1800.00, '2023-01-13', 'Pagado'),
(3, 3, 3, 2500.00, '2023-01-16', 'Pendiente'),
(4, 4, 4, 1200.00, '2023-01-19', 'Pagado'),
(5, 5, 5, 2800.00, '2023-01-21', 'Pagado'),
(6, 6, 6, 950.00, '2023-01-26', 'Pendiente'),
(7, 7, 7, 1400.00, '2023-01-29', 'Pagado'),
(8, 8, 8, 2200.00, '2023-02-02', 'Pendiente'),
(9, 9, 9, 3000.00, '2023-02-06', 'Pagado'),
(10, 10, 10, 1750.00, '2023-02-09', 'Pagado'),
(11, 11, 11, 4000.00, '2023-02-13', 'Pendiente'),
(12, 12, 12, 950.00, '2023-02-15', 'Pagado'),
(13, 13, 13, 600.00, '2023-02-19', 'Pendiente'),
(14, 14, 14, 1800.00, '2023-02-21', 'Pagado'),
(15, 15, 15, 1250.00, '2023-02-26', 'Pagado'),
(16, 16, 16, 2200.00, '2023-03-01', 'Pendiente'),
(17, 17, 17, 1700.00, '2023-03-04', 'Pagado'),
(18, 18, 18, 2600.00, '2023-03-07', 'Pendiente'),
(19, 19, 19, 3400.00, '2023-03-09', 'Pagado'),
(20, 20, 20, 800.00, '2023-03-13', 'Pagado'),
(21, 21, 21, 900.00, '2023-03-16', 'Pendiente'),
(22, 22, 22, 1200.00, '2023-03-19', 'Pagado'),
(23, 23, 23, 1800.00, '2023-03-21', 'Pendiente'),
(24, 24, 24, 1500.00, '2023-03-26', 'Pagado'),
(25, 25, 25, 2600.00, '2023-03-29', 'Pendiente'),
(26, 26, 26, 2000.00, '2023-04-03', 'Pagado'),
(27, 27, 27, 3100.00, '2023-04-07', 'Pagado'),
(28, 28, 28, 950.00, '2023-04-11', 'Pendiente'),
(29, 29, 29, 1600.00, '2023-04-13', 'Pagado'),
(30, 30, 30, 2800.00, '2023-04-16', 'Pagado');

SELECT * FROM Pagos