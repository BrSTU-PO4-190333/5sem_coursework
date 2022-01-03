CREATE TABLE `gpi_products` (
    `gpi_id` INT NOT NULL AUTO_INCREMENT ,
    `gpi_model` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `gpi_name` VARCHAR(220) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `gpi_img_path` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `gpi_cost_byn` DECIMAL(6,2) NOT NULL,
    `gpi_on_box` INT NOT NULL ,
    `gpi_kg` DECIMAL(6,3) NOT NULL,
    `gpi_m3` DECIMAL(7,4) NOT NULL,
    `gpi_company` VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `gpi_category` VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    UNIQUE (`gpi_id`)
) ENGINE = MyISAM;
