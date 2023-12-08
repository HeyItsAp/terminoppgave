-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Terminoppgave
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Terminoppgave` DEFAULT CHARACTER SET utf8 ;
USE `Terminoppgave` ;

-- -----------------------------------------------------
-- Table `Terminoppgave`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Terminoppgave`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `DisplayName` VARCHAR(255) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `pwd` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Terminoppgave`.`Items_bool`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Terminoppgave`.`items_bool` (
  `items_id` INT NOT NULL AUTO_INCREMENT,
  `User_id` INT NOT NULL,
  `Disabled Kid` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Sakura (Fra Naurto)` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Santa Claus` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Black hole` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Skibidi Toilet` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Whip from the good old times` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Chainsaw man` VARCHAR(45) NOT NULL DEFAULT 'false',
  `W Rizz.` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Creator's Mother` VARCHAR(45) NOT NULL DEFAULT 'false',
  `H Magnus H` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Dad's Milk` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Water bending` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Ni-ho-di` VARCHAR(45) NOT NULL DEFAULT 'false',
  `Life` VARCHAR(45) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`items_id`),
  INDEX `fk_Items_User_idx` (`User_id` ASC),
  CONSTRAINT `fk_Items_User`
    FOREIGN KEY (`User_id`)
    REFERENCES `Terminoppgave`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `Terminoppgave`.`Biscuit_Progress`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Terminoppgave`.`biscuit_progress` (
  `Progress_id` INT NOT NULL AUTO_INCREMENT,
  `User_id` INT NOT NULL,
  `biscuit_count` INT(255) NOT NULL DEFAULT 0,
  `prestige_count` INT(255) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Progress_id`),
  INDEX `fk_Biscuit_Progress_User1_idx` (`User_id` ASC),
  CONSTRAINT `fk_Biscuit_Progress_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `Terminoppgave`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Terminoppgave`.`Upgrades_number`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Terminoppgave`.`upgrades_number` (
  `Upgrades_id` INT NOT NULL AUTO_INCREMENT,
  `User_id` INT NOT NULL,
  `Better sleep` INT NOT NULL DEFAULT 0,
  `Dinner every day` INT NOT NULL DEFAULT 0,
  `Education` INT NOT NULL DEFAULT 0,
  `Extra lessons` INT NOT NULL DEFAULT 0,
  `Collage` INT NOT NULL DEFAULT 0,
  `Working Graduate` INT NOT NULL DEFAULT 0,
  `Political effects` INT NOT NULL DEFAULT 0,
  `Chance to expand` INT NOT NULL DEFAULT 0,
  `Cooperation` INT NOT NULL DEFAULT 0,
  `Mr. Biscuit WorldWide` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`Upgrades_id`),
  INDEX `fk_Upgrades_User1_idx` (`User_id` ASC),
  CONSTRAINT `fk_Upgrades_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `Terminoppgave`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
