show databases;



use node_adso2894667;

create table categorias (
  id int auto_increment primary key,
    nombre varchar(255) not null,
    descripcion text null,
    create_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table productos(
  id int auto_increment primary key,
    nombre varchar(255) not null,
    descripcion text,
    precio decimal(10,2),
    categoria_id  int,
    create_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
  foreign key (categoria_id) references categorias (id) on delete set null
    );

insert into categorias(nombre,descripcion) values ("Verduras", "categoria de verduras"),
("Peliculas", "categoria de peliculas");

select * from categorias;
select * from productos;

insert into productos(nombre,descripcion, precio, categoria_id) values ("Pepino", "verdura", 700.00, 1),
("Matrix", "La mejor pelicula con los primeros efectos 3d", 50000.00, 2);
