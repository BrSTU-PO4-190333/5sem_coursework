CREATE TABLE `gpi_admins` ( 
    `gpi_login` VARCHAR(16) NOT NULL , 
    `gpi_password` VARCHAR(32) NOT NULL , 
    UNIQUE `gpi_login` (`gpi_login`)
) ENGINE = MyISAM;

INSERT INTO `gpi_admins` (`gpi_login`, `gpi_password`) VALUES ('root','root');
