import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DocumentCard.module.css";

function DocumentCard(props) {
  return (
    <a
      className={styles.card_link}
      href={props.data.depaby_href}
    >
      <div className={styles.icon_b}>
        <FontAwesomeIcon icon={faFilePdf} />
      </div>
      <div>
        {props.data.depaby_caption}
      </div>
    </a>
  );
}

export default DocumentCard;
