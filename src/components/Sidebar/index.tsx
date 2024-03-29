import styles from './styles.module.css'
import { PencilLine } from 'phosphor-react' 
import { Avatar } from '../Avatar'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1516886635086-2b3c423c0947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://avatars.githubusercontent.com/u/12867589?v=4" />

        <strong>Luis Fernando</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}