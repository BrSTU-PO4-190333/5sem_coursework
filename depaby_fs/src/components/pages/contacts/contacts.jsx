import { useEffect, useState } from "react";
import { faViber, faWhatsapp, faSkype, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FetchContacts from './../../../scripts/FetchContacts';
import styles from "./contacts.module.css";

function Contacts() {
    const [contactsArray, setContactsArray] = useState([]);

    useEffect(function () {
        read();
    }, []);

    async function read() {
        const object = new FetchContacts();
        const response = await object.read();
        console.log(response);
        setContactsArray(response);
    }

    return (
        <div className="container">
            <h1>Контакты</h1>
            {
                contactsArray.map(function (value, index) {
                    return (
                        <div key={index}>
                            <ContactCaption data={value} />
                            <ContactDescription data={value} />
                            <div className={styles.contact__button_links}>
                                <ContactPhone1 data={value} />
                                <ContactPhone2 data={value} />
                                <ContactEmail1 data={value} />
                                <ContactEmail2 data={value} />
                            </div>
                            <div className={styles.contact__social_button_links}>
                                <ContactViber data={value} />
                                <ContactWhatsapp data={value} />
                                <ContactSkype data={value} />
                                <ContactTelegram data={value} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

function ContactCaption(props) {
    return props.data.depaby_caption ? (
        <h2 className={styles.contact__caption}>
            {props.data.depaby_caption}
        </h2>
    ) : <></>;
}

function ContactDescription(props) {
    return props.data.depaby_description ? (
        <p className={styles.contact__description}>
            {props.data.depaby_description}
        </p>
    ) : <></>;
}

function get_no_format_phone(format_phone = '') {
    let re = /\D/gi;
    let no_format_phone = format_phone.replace(re, '');
    return no_format_phone;
}

function ContactPhone1(props) {
    return props.data.depaby_phone1_noformat ? (
        <a href={`tel:${get_no_format_phone(props.data.depaby_phone1_noformat)}`}>
            {props.data.depaby_phone1_noformat}
        </a>
    ) : <></>;
}

function ContactPhone2(props) {
    return props.data.depaby_phone2_noformat ? (
        <a href={`tel:${get_no_format_phone(props.data.depaby_phone2_noformat)}`}>
           {props.data.depaby_phone2_noformat}
        </a>
    ) : <></>;
}

function ContactEmail1(props) {
    return props.data.depaby_email1 ? (
        <a href={`mailto:${props.data.depaby_email1}`}>
           {props.data.depaby_email1}
        </a>
    ) : <></>;
}

function ContactEmail2(props) {
    return props.data.depaby_email2 ? (
        <a href={`mailto:${props.data.depaby_email2}`}>
           {props.data.depaby_email2}
        </a>
    ) : <></>;
}

function ContactViber(props) {
    return props.data.depaby_viber ? (
        <a
            href={`viber://add?number=${get_no_format_phone(props.data.depaby_viber)}`}
            className={styles.viber}
        >
           <FontAwesomeIcon icon={faViber} />
        </a>
    ) : <></>;
}

function ContactWhatsapp(props) {
    return props.data.depaby_whatsapp ? (
        <a
            href={`https://api.whatsapp.com/send?phone=${get_no_format_phone(props.data.depaby_whatsapp)}`}
            className={styles.whatsapp}
        >
           <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    ) : <></>;
}

function ContactSkype(props) {
    return props.data.depaby_skype ? (
        <a
            href={`skype:${props.data.depaby_skype}?call`}
            className={styles.skype}
        >
           <FontAwesomeIcon icon={faSkype} />
        </a>
    ) : <></>;
}

function ContactTelegram(props) {
    return props.data.depaby_telegram ? (
        <a
            href={`https://t.me/${props.data.depaby_telegram}`}
            className={styles.telegram}
        >
           <FontAwesomeIcon icon={faTelegramPlane} />
        </a>
    ) : <></>;
}

export default Contacts;
