## Project setup (need NodeJS, make)

```bash
make install
```

Create database `database`

```sql
CREATE DATABASE `database`;
```

Create table `products`

```sql
CREATE TABLE `database`.`products` (
    `ID` INT NOT NULL AUTO_INCREMENT ,
    `Model` VARCHAR(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `Name` VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `NameRU` VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `OnBox` INT NOT NULL ,
    `KG` FLOAT UNSIGNED NOT NULL ,
    `M3` FLOAT UNSIGNED NOT NULL , UNIQUE (`ID`)
) ENGINE = MyISAM;
```

Create table `admins`

```sql
CREATE TABLE `database`.`admins` ( 
    `login` VARCHAR(16) NOT NULL , 
    `password` VARCHAR(32) NOT NULL , 
    UNIQUE `login` (`login`)
) ENGINE = MyISAM;

INSERT INTO `admins`(`login`, `password`) VALUES ('root','root');
```

---

## Up server for development BackEnd (need NodeJS, make)

```bash
make bdev
```

Open in the browser http://localhost:3001.

To stop the server press the keys `Ctrl` + `C`.

---

## Compiles and hot-reloads for development FrontEnd (need NodeJS, make)

```bash
make fdev
```

Open in the browser http://localhost:3000.

To stop the server press the keys `Ctrl` + `C`.
