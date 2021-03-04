import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const{challengesCompleted}=useContext(ChallengesContext);
    const{isActiveDark} =useContext(ThemeContext);

    return (
        <div className={isActiveDark?styles.completedChallengesContainerDark:styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}