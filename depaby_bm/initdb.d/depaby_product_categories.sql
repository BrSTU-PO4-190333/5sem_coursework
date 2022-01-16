CREATE TABLE `depaby_product_categories` (
    `depaby_id` INT NOT NULL AUTO_INCREMENT ,
    `depaby_caption` VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_product_category` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_img_href` VARCHAR(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    UNIQUE `depaby_id` (`depaby_id`)
) ENGINE = MyISAM CHARSET=utf8 COLLATE utf8_general_ci;
