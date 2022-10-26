create table Miembro(
    id serial not null,
    nombre text,
    apellido text,
    rut text,
    correo text,
    patente text, 
    premium boolean
);

create table Venta(
    idVenta serial not null,
    idCliente serial,
    cantidad int,
    hora time,
    stockRestante int,
    ubicacion text
)
