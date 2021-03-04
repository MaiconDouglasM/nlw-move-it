import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);
    const {isActiveDark} = useContext(ThemeContext);

    function handleChallengeSucceeded(){
        completChallenge();
        resetCountdown();
    }
    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={isActiveDark?styles.challengeBoxContainerDark:styles.challengeBoxContainer}>
           {activeChallenge ?( 
               <div className={isActiveDark ? styles.challengeActiveDark : styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>
                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>
                   <footer>
                       <button 
                        type="button"
                        className={isActiveDark ? styles.challengeFailedButtonDark:styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                       >
                           Falhei
                        </button>
                       <button 
                        type="button"
                        className={isActiveDark ? styles.challengeSucceededButtonDark:styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                       >
                           Completei
                        </button>
                   </footer>
               </div>
            ):(
            <div className={isActiveDark ?styles.challengeNotActiveDark:styles.challengeNotActive}>
                <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP" />
                    Avance de level completando desafios
                </p>
            </div>
            )}
        </div>
    );
}