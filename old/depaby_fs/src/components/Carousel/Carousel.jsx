import { useEffect, useRef, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Carousel.module.css";

function Carousel(props) {
    const arrayRef = useRef(null);
    const [htmlSlidesArray, setHtmlSlidesArray] = useState([<div></div>]);
    const [currentId, setCurrentId] = useState(0);

    useEffect(function() {        
        if (arrayRef.current) {
            if (arrayRef.current.childNodes) {
                setHtmlSlidesArray(arrayRef.current.childNodes);
            }
        }
    }, [arrayRef]);

    function nextSlide() {
        if (currentId + 1 >= htmlSlidesArray.length) {   
            htmlSlidesArray[currentId].style.display = 'none';
            htmlSlidesArray[0].style.display = 'block';
            setCurrentId(0);
            return;
        }
        htmlSlidesArray[currentId].style.display = 'none';
        htmlSlidesArray[currentId + 1].style.display = 'block';
        setCurrentId(currentId + 1);
    }

    function prevSlide() {
        if (currentId - 1 < 0) {
            htmlSlidesArray[currentId].style.display = 'none';
            htmlSlidesArray[htmlSlidesArray.length - 1].style.display = 'block';
            setCurrentId(htmlSlidesArray.length - 1);
            return;
        }
        htmlSlidesArray[currentId].style.display = 'none';
        htmlSlidesArray[currentId - 1].style.display = 'block';
        setCurrentId(currentId - 1);
    }

    return (
        <div className={styles.Carousel__block}>
            <div className={styles.Carousel__slides} ref={arrayRef}>
                {
                    props.images.map(function (value, index) {
                        return (
                            <div className={styles.Carousel__slide} key={index}>
                                <img src={value} alt="" />
                            </div>
                        );
                    })
                }
                
            </div>
            <button onClick={prevSlide} className={styles.prev}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={nextSlide} className={styles.next}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className={styles.index_caption}>
                {currentId+1}/{htmlSlidesArray.length}
            </div>
        </div>
    );
}

export default Carousel;
