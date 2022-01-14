CREATE TABLE `depaby_admins` ( 
    `depaby_login` VARCHAR(16) NOT NULL , 
    `depaby_password` VARCHAR(32) NOT NULL , 
    UNIQUE `depaby_login` (`depaby_login`)
) ENGINE = MyISAM;

INSERT INTO `depaby_admins` (`depaby_login`, `depaby_password`) VALUES ('root','root');
