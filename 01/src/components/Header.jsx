import global from './Header.module.css'
import AlyythonImage from '../assets/AlyythonImage.svg'; //Semelhante a declarar uma funçao , usando o nome antes


export function Header() {
return (
    <header className={global.header}>
        <img src= {AlyythonImage} alt="Logotipo Allython" />

    </header>
    );
}

