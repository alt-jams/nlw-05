import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';
import { FaMoon } from "react-icons/fa";
import { useState } from 'react';


export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMM', {
        locale: ptBR,
    });

    const [isDarkMode, setIsDarkMode] = useState(false);

    function setDarkModeStatus() {
        setIsDarkMode(!isDarkMode);
    }

    function setDarkMode(){
        document.body.classList.toggle("dark");
        document.getElementById("toggle").classList.toggle(`${styles.activeToggle}`);
        document.getElementById("icon").classList.toggle(`${styles.active}`);

        const logo = document.getElementById("logoPodcastr") as HTMLImageElement;
        
        if (isDarkMode == false){
            logo.src= "/logoDarkMode.svg";
        }else {
            logo.src= "/logo.svg";
        }
        setDarkModeStatus();
    }

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" id="logoPodcastr"/>

            <p>O melhor para você ouvir, sempre</p>

            <div className= {styles.toggle} id="toggle"></div>
            <button className= {styles.inactive} onClick={setDarkMode} id="icon">
                    <FaMoon size={24}/>
            </button>

            <span>{currentDate}</span>
        </header>
    );
}