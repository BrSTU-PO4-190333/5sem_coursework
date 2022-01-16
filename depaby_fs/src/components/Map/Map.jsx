import styles from './Map.module.css';

function Map() {
    return (
        <div className={styles.map_block}>
            <iframe
                className={styles.map_iframe}
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d78388.4460933376!2d23.614238982035488!3d52.122697953737976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4721096fcc9ae743%3A0x6cf8603cfd1e6075!2z0J7QntCeICLQlNCVLdCf0JAi!3m2!1d52.1227187!2d23.684278499999998!5e0!3m2!1sru!2sby!4v1532210293826"
                width="600"
                height="480"
                frameBorder="0"
            ></iframe>
        </div>
    );
}

export default Map;
