import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src="img/drug.png"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>감기 진단 알고리즘</h2>
                        <p>로봇이 환자의 정확한 상태를 파악하기 위해</p>
                        <p>성실히 설문조사에 응해주세요.</p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/diag-cold" className={styles.start__button}>
                            감기 진단 하러가기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
