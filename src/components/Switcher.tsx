import React, { useContext } from 'react';
import Switch from 'react-switch';
import styles from '../styles/components/Switcher.module.css'
import {ThemeContext} from '../contexts/ThemeContext'

export function Switcher(){
    const{setDark, isActiveDark}= useContext(ThemeContext);
    return (
        <div className={styles.switcherContainer}>
            <Switch
            onChange={()=>{setDark()}}
            checked={isActiveDark}
            checkedIcon={false}
            uncheckedIcon={false}
            checkedHandleIcon={<img src="icons/crescent-moon.svg"/>}
            uncheckedHandleIcon={<img src="icons/sun.svg"/>}
            height={15}
            width={40}
            handleDiameter={30}
            onColor='#271052'
            offColor='#fff'
            onHandleColor='#b392f0'
            />
        </div>
    );
}