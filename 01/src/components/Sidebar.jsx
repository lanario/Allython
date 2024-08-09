import styles from './Sidebar.module.css';
import Alan_dev from '../assets/Alan_dev.jpg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            
            <div className={styles.profileContainer}>
                <img 
                    className={styles.profile} 
                    src={Alan_dev} 
                    alt="Alan Dev" 
                />
                <strong>Alan Barros</strong>
                <span>Dev Backend</span>
                <footer>
                    <a href="#">Editar seu Perfil</a>
                </footer>
            </div>
        </aside>
    );
}
