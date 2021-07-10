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
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Techincal Notes</h1>

        <div className={styles.grid}>
          {allPosts.map((post, i) => (
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]" key={i}>
              <a className={styles.card}>
                <h2>{post.title} &rarr;</h2>
                <p>{post.description}</p>
                <div>{post.date}</div>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>Tech Blog, 2021</div>
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
