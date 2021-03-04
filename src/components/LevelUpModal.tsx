import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/LevelUpModal.module.css';


export function LevelUpModal() {
    const{level, closeLevelUpModal}=useContext(ChallengesContext); 
    const{isActiveDark}=useContext(ThemeContext);
    return (
        <div className={isActiveDark?styles.overlayDark:styles.overlay}>
            <div className={isActiveDark?styles.containerDark:styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    );
}