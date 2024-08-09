import { Post } from "./post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css' //para app.modules ser chamado , tera q chamar Styles

import './global.css'

export function App() {

  return(
    <div>
    <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Alan Barros" 
            content= "Dale  no Ricks meu parssuairo"
          />

          <Post 
            author="Luana Barros" 
            content= 'Its a Cool post'
          />
        </main>
      </div>
    </div>
  ) 
}






