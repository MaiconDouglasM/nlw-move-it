import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
   
    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive,
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext);
    const{isActiveDark} =useContext(ThemeContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
   
    return (
        <div>
            <div className={isActiveDark?styles.countdownContainerDark:styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={isActiveDark?styles.countdownButtonDark:styles.countdownButton}
                >
                    Ciclo encerrado
                </button>

            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${isActiveDark?styles.countdownButtonDark:styles.countdownButton} ${isActiveDark?styles.countdownButtonActiveDark:styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={isActiveDark?styles.countdownButtonDark:styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>
                )
            }
        </div>

    );
}