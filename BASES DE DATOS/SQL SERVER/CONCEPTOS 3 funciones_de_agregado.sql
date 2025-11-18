use prueba
select * from products
--funciones de agregado
select min(ProductID) from products-- min trae el minimo valor
select min(UnitsInStock) from products
select max(ProductID) from products--max trae el maximo valor
select max(UnitsInStock) from products
select avg(ProductID) from products--avg trae el promedio
select avg(UnitsInStock) as promedio_cantidad from products
--suma
select sum(UnitsInStock) from products 
where UnitsInStock < 20  and ProductName like '%a%'
select * from products
--
select sum(UnitsInStock) from products 
where UnitsInStock < 20  and ProductName like 'c%'
select * from products