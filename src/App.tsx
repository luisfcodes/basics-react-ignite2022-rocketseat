import { Header } from "./components/Header";

import './global.css';
import styles from './app.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";

interface Posts extends PostProps {
  id: number
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/12867589?v=4',
      name: 'Luis Fernando',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-02 19:00:35')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/9295389?v=4',
      name: 'Amanda Soares',
      role: 'SDR'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal 💕' },
      { type: 'paragraph', content: 'Finalizei mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignews ✨' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-01 10:00:35')
  }
]

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>

  )
}
