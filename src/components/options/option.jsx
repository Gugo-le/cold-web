import React, { createRef, useEffect, useState } from 'react';
import styles from './option.module.css';
import { useHistory } from 'react-router-dom';
import Questions from '../../common/api/questionsApi/../questionsApi';

const Options = () => {
    const [loading, setLoading] = useState(false);
    const [num, setNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = createRef(null);
    const TOTAL_SLIDES = 12;
    const history = useHistory();
    const [cough, setCough] = useState([]);

    const nextSlideFir = () => {
        setCough(cough + Questions[num].answers[0].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };
    const nextSlideSec = () => {
        setCough(cough + Questions[num].answers[1].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
    };

    const coughChecker = () => {
        setLoading(true);
        let map = {};
        let result = [];
        for (let i = 0; i < cough.length; i++) {
            if (cough[i] in map) {
                map[cough[i]] += 1;
            } else {
                map[cough[i]] = 1;
            }
        }
        for (let count in map) {
            if (map[count] >= 2) {
                result.push(count);
            }
        }

        setTimeout(() => {
            const examResult = result.join('');
            history.push(`/result/${examResult}`);
        }, 3000);
    };
    useEffect(() => {
        currentSlide > TOTAL_SLIDES && coughChecker();
    }, [currentSlide]);

    return (
        <>
            <section className={styles.container}>
                {!loading && (
                    <>
                        <div className={styles.slider} ref={slideRef}>
                            {Questions.map((item) => {
                                return (
                                    <div
                                        className={styles.content}
                                        key={item.id}
                                    >
                                        <div className={styles.top}>
                                            <div
                                                className={styles.cough__counter}
                                            >
                                                <span
                                                    className={
                                                        styles.cough__progress__color
                                                    }
                                                >
                                                    {currentSlide}
                                                </span>
                                                <span
                                                    className={
                                                        styles.cough__end__color
                                                    }
                                                >
                                                    /{TOTAL_SLIDES}
                                                </span>
                                            </div>
                                            <h1
                                                className={
                                                    styles.cough__question
                                                }
                                            >
                                                {item.question}
                                            </h1>
                                        </div>
                                        <article
                                            className={styles.cough__btn__box}
                                        >
                                            <button
                                                className={styles.cough__button}
                                                onClick={nextSlideFir}
                                            >
                                                {item.answers[0].content}
                                            </button>
                                            <button
                                                className={styles.cough__button}
                                                onClick={nextSlideSec}
                                            >
                                                {item.answers[1].content}
                                            </button>
                                        </article>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
                {loading && (
                    <div className={styles.loading__container}>
                        <img
                            className={styles.ticket}
                            src="img/highdrug.png"
                        />
                        <div className={styles.loading}></div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Options;
