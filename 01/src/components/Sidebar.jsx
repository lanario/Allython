import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.capa}
            src="https://images.pexels.com/photos/25772473/pexels-photo-25772473/free-photo-of-preto-e-branco-p-b-panorama-vista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="capa" 
            />
            
            <div className={styles.profileContainer}>
                <img
                    className={styles.avatar} 
                    src='https://avatars.githubusercontent.com/u/139390594?v=4' 
                    alt="Alan Dev" 
                />
                <strong>Alan Barros</strong>
                <span>Dev Backend</span>
                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu Perfil
                    </a>
                </footer>
            </div>
        </aside>
    );
}
