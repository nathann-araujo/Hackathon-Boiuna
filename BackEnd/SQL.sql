CREATE TABLE IF NOT EXISTS `3523778_xibata`.`usuario` (
  `id_usuario` INT NOT NULL,
  `cpf` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `endereco` VARCHAR(45) NULL,
  `idade` INT NULL,
  `positivo` TINYINT NULL,
  `gestante_puerpera` TINYINT NULL,
  `asma` TINYINT NULL,
  `diabetes` TINYINT NULL,
  `hipertensao` TINYINT NULL,
  `cardiaca` TINYINT NULL,
  `avc` TINYINT NULL,
  `cancer` TINYINT NULL,
  `alzheimer` TINYINT NULL,
  `parkinson` TINYINT NULL,
  `dpoc` TINYINT NULL,
  `fumante` TINYINT NULL,
  `senha` VARCHAR(45) NULL,
  `pontos_doenca` INT NULL,
  `status` VARCHAR(85) NULL,
  `email` VARCHAR(45) NULL,
  `posicao` INT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `3523778_xibata`.`dia` (
  `id_dia` INT NOT NULL,
  `febre` TINYINT NULL,
  `tosse_seca` TINYINT NULL,
  `tosse_persistente` TINYINT NULL,
  `espirros` TINYINT NULL,
  `coriza` TINYINT NULL,
  `dor_garganta` TINYINT NULL,
  `diarreia` TINYINT NULL,
  `dor_cabeca` TINYINT NULL,
  `falta_ar` TINYINT NULL,
  `dor_corpo` TINYINT NULL,
  `emagrecimento` TINYINT NULL,
  `desidratacao` TINYINT NULL,
  `falta_apetite` TINYINT NULL,
  `sincope` TINYINT NULL,
  `confusao_mental` TINYINT NULL,
  `sonolencia_excessiva` TINYINT NULL,
  `irritabilidade` TINYINT NULL,
  `perda_paladar` TINYINT NULL,
  `perda_olfato` TINYINT NULL,
  `fadiga` TINYINT NULL,
  `sudorese` TINYINT NULL,
  `vomito` TINYINT NULL,
  `pontos_sintoma` INT NULL,
  `dia` DATE NULL,
  `outro` VARCHAR(45) NULL,
  PRIMARY KEY (`id_dia`))
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `3523778_xibata`.`usuario_in_dia` (
  `usuario_id_usuario` INT NOT NULL,
  `dia_id_dia` INT NOT NULL,
  `soma_pontos` INT NULL,
  PRIMARY KEY (`usuario_id_usuario`, `dia_id_dia`),
  CONSTRAINT `fk_usuario_has_dia_usuario`
    FOREIGN KEY (`usuario_id_usuario`)
    REFERENCES `3523778_xibata`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_dia_dia1`
    FOREIGN KEY (`dia_id_dia`)
    REFERENCES `3523778_xibata`.`dia` (`id_dia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB