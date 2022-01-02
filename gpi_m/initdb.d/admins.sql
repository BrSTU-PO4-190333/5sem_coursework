CREATE TABLE `database`.`admins` ( 
    `login` VARCHAR(16) NOT NULL , 
    `password` VARCHAR(32) NOT NULL , 
    UNIQUE `login` (`login`)
) ENGINE = MyISAM;

INSERT INTO `admins` (`login`, `password`) VALUES ('root','root');
