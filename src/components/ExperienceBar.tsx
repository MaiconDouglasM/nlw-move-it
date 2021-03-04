import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ExperienceBar.module.css';


export function ExperienceBar(){
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);
    const{isActiveDark} =useContext(ThemeContext);
    

    const percentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel;
    return(
        <header className={isActiveDark?styles.experienceBarDark:styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}/>
                <span className={isActiveDark?styles.currentExperienceDark:styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}