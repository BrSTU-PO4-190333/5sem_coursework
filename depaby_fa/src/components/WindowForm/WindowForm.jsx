import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './WindowForm.module.css';

function WindowForm(props) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(function() {
        setIsOpen(isOpen => !isOpen);
    }, [props.signal]);

    function closeWindow() {
        setIsOpen(!isOpen);
        if (props.destructor) {
            props.destructor();
        }
    }

    return (
        <>
            <button
                title={props.button_title}
                onClick={event => setIsOpen(!isOpen)}
            >
                <FontAwesomeIcon icon={props.button_icon} />
            </button>
            <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className={styles.window}
            >
                <div className={styles.window_header}>
                    <button onClick={event => closeWindow()}>Закрыть</button>
                    <span>{props.window_title}</span>
                </div>
                <props.html />
            </div>
        </>
    );
}

export default WindowForm;
