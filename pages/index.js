import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import store from '../redux/store.js'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Redux Practice</title>
          <meta name="Redux Practice" content="Testing the features of Redux/Redux Toolkit" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Link href="/counter">Click here to navigate to a counter page that uses Redux with the Redux Toolkit</Link>
        </main>

        <footer className={styles.footer}>
          This is a footer lol
        </footer>
      </div>
    </Provider>
  )
}
