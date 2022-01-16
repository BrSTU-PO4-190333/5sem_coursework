CREATE TABLE `depaby_contacts` (
    `depaby_id` INT NOT NULL AUTO_INCREMENT ,
    `depaby_caption` VARCHAR(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_description` VARCHAR(512) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_phone1` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_phone2` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_email1` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_email2` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_viber` VARCHAR(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_whatsapp` VARCHAR(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_skype` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    `depaby_telegram` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
    UNIQUE `depaby_id` (`depaby_id`)
) ENGINE = MyISAM CHARSET=utf8 COLLATE utf8_general_ci;
