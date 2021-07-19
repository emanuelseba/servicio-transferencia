CREATE TABLE `tipo_cuenta` (
	id_tipo_cuenta int NOT NULL,
	nombre_cuenta varchar(100),
	PRIMARY KEY (id_tipo_cuenta)
);

CREATE TABLE `usuarios` (
	id_usuario int NOT NULL,
	nombres varchar(255),
	correo varchar(255),
	password varchar(255),
	PRIMARY KEY (id_usuario)
);

CREATE TABLE `destinatarios` (
	id_destinatario int NOT NULL,
	rut int,
	dv int,
	id_usuario int NOT NULL,
	nombres varchar(255),
	correo varchar(255),
	telefono varchar(12),
	num_cuenta varchar(255),
	banco varchar(255),
	id_tipo_cuenta int,
	PRIMARY KEY (id_destinatario)
);

CREATE TABLE `transferencias` (
	id_transferencia int NOT NULL,
	id_destinatario int NOT NULL,
	id_usuario int NOT NULL,
	monto int,
	fecha_creacion datetime,
	PRIMARY KEY (id_transferencia)
);



ALTER TABLE `destinatarios` 
ADD INDEX `id_usuaro_fk_idx` (`id_usuario` ASC),
ADD INDEX `id_tipo_cuenta_fk_idx` (`id_tipo_cuenta` ASC);

ALTER TABLE `destinatarios` 
ADD CONSTRAINT `id_usuaro_fk`
  FOREIGN KEY (`id_usuario`)
  REFERENCES `usuarios` (`id_usuario`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `id_tipo_cuenta_fk`
  FOREIGN KEY (`id_tipo_cuenta`)
  REFERENCES `tipo_cuenta` (`id_tipo_cuenta`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `transferencias` 
ADD INDEX `id_usuaro_fk_idxt` (`id_usuario` ASC),
ADD INDEX `id_destinatario_fk_idxt` (`id_destinatario` ASC);

ALTER TABLE `transferencias` 
ADD CONSTRAINT `id_usuaro_fk_t`
  FOREIGN KEY (`id_usuario`)
  REFERENCES `usuarios` (`id_usuario`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `id_destinatario_fk`
  FOREIGN KEY (`id_destinatario`)
  REFERENCES `destinatarios` (`id_destinatario`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;



INSERT INTO `usuarios` (`id_usuario`, `nombres`, `correo`, `password`) VALUES ('1', 'Prueba', 'prueba@ripley.cl', '$2a$08$GzugOwAgmIIK8GuMZSFyuueFRrD8BDEDszjY/DIxZD6diZ1ja6c6m');

INSERT INTO `heroku_f06325465aaf9f5`.`tipo_cuenta` (`id_tipo_cuenta`, `nombre_cuenta`) VALUES ('1', 'Cuenta Ahorro');
INSERT INTO `heroku_f06325465aaf9f5`.`tipo_cuenta` (`id_tipo_cuenta`, `nombre_cuenta`) VALUES ('2', 'Cuenta Vista');
INSERT INTO `heroku_f06325465aaf9f5`.`tipo_cuenta` (`id_tipo_cuenta`, `nombre_cuenta`) VALUES ('3', 'Cuenta Corriente');

INSERT INTO `destinatarios` (`id_destinatario`, `rut`, `dv`, `id_usuario`, `nombres`, `correo`, `telefono`, `num_cuenta`, `banco`, `id_tipo_cuenta`) VALUES ('1', '20086533', '2', '1', 'Emanuel Inostroza', 'emanuelinostrozauribe@gmail.com', '955302187', '123456', 'Banco Ripley', '1');


INSERT INTO `transferencias` (`id_transferencia`, `id_destinatario`, `id_usuario`, `monto`, `fecha_creacion`) VALUES ('1', '1', '1', '1000', '2021-07-15 22:23:0000');


