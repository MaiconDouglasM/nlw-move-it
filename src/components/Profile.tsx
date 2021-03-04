import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Profile.module.css';




export function Profile() {
    const {level}=useContext(ChallengesContext);
    const {isActiveDark}=useContext(ThemeContext);
    return (
        <div className={isActiveDark?styles.profileContainerDark:styles.profileContainer}>
            <img src="https://github.com/kingurigu.png" alt="Maicon Douglas" />
            <div>
                <strong>Maicon Douglas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}