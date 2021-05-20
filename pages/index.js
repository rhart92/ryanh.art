import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan's Home on the Interwebs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Ryan's Home on the Interwebs 👋
        </h1>

        <p className={styles.description}>
          Obviously this is still a construction zone 🚧
        </p>
      </main>

      <footer className={styles.footer}>
        ©️ Ryan Hart 2021
      </footer>
    </div>
  )
}
