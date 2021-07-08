import React from 'react'
import gfm from 'remark-gfm'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import styles from './Post.module.css'
import CodeBlock from '../../components/CodeBlock'
import { getPostBySlug, getAllPosts } from '../../components/utils'
import Toc from '../../components/Toc'

const Post = props => {
  const { post } = props
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={styles.container}>
        <div className={styles.homeIcon} onClick={goHome}>
          <img src="../icon-home.svg" alt="Go home" width={24} height={24} />
        </div>
        <Toc toc={post.content} />

        <div>
          <ReactMarkdown
            remarkPlugins={[gfm]}
            components={CodeBlock}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default Post

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'description',
  ])

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
