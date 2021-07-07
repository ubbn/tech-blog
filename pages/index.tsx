import Head from 'next/head'
import { getAllPosts } from '../components/utils'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  description: string
  date: string
}

interface Props {
  allPosts: Array<Post>
}

export default function Home(props: Props) {
  const { allPosts } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Blog</title>
        <meta
          name="description"
          content="Created for spreading technical knowledge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Tlog</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {allPosts.map((post, i) => (
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]" key={i}>
              <a className={styles.card}>
                <h2>{post.title} &rarr;</h2>
                <p>{post.description}</p>
                <p>{post.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'description',
  ])
  return {
    props: { allPosts },
  }
}
