CREATE TABLE `depaby_documents` (
  `depaby_id` INT NOT NULL AUTO_INCREMENT ,
  `depaby_caption` VARCHAR(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  `depaby_href` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  `depaby_page_category` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
  UNIQUE `depaby_id` (`depaby_id`)
) ENGINE = MyISAM CHARSET=utf8 COLLATE utf8_general_ci;
