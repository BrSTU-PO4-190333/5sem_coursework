CREATE TABLE `depaby_admins` ( 
    `depaby_login` VARCHAR(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , 
    `depaby_password` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , 
    UNIQUE `depaby_login` (`depaby_login`)
) ENGINE = MyISAM CHARSET=utf8 COLLATE utf8_general_ci; 

INSERT INTO `depaby_admins` (`depaby_login`, `depaby_password`) VALUES ('root','root');
