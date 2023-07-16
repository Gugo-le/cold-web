import styles from './studies.module.css';
import { Link } from 'react-router-dom';
import Countries from '../../common/api/studiesApi/../studiesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const Profile = ({ match }) => {
    const { countryName } = match.params;
    const nation = Countries[countryName];

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>;
    }
    return (
        <>
            <div className={styles.wrapper} key={nation.id}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        
                    </div>
                    <img
                        src={nation.img}
                        alt="img"
                        className={styles.main__img}
                    />
                    <div className={styles.result__type}>
                        <h1 className={styles.result__city}>
                            {nation.subject}
                        </h1>
                        <br />
                    </div>
                    <div className={styles.reust__title}>
                        <h2>{nation.id}의 감기 예방 방법은?</h2>
                    </div>
                    <ul className={styles.result__style__wrapper}>
                        {nation.description.map((item) => {
                            return (
                                <li
                                    className={styles.result__style__detail}
                                    key={item.des}
                                >
                                    {item.des}
                                </li>
                            );
                        })}
                    </ul>
                    
                
                    <div className={styles.button__box}>
                        <Link to="/" className={styles.button}>
                            다시하기
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className={styles.icon}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
