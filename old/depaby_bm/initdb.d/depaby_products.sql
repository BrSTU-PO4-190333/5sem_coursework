CREATE TABLE `depaby_products` (
  `depaby_id` INT NOT NULL AUTO_INCREMENT ,
  `depaby_model` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  `depaby_name` VARCHAR(220) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  `depaby_img_href` VARCHAR(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  `depaby_cost_byn` DECIMAL(6,2) NOT NULL,
  `depaby_on_box` INT NOT NULL ,
  `depaby_kg` DECIMAL(6,3) NOT NULL,
  `depaby_m3` DECIMAL(7,4) NOT NULL,
  `depaby_company` VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  `depaby_category` VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  UNIQUE (`depaby_id`)
) ENGINE = MyISAM CHARSET=utf8 COLLATE utf8_general_ci;
