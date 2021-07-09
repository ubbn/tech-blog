import React from 'react'
import gfm from 'remark-gfm'
import Head from 'next/head'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import styles from './Post.module.css'
import CodeBlock from '../../components/CodeBlock'
import { getPostBySlug, getAllPosts } from '../../components/utils'
import Toc from '../../components/Toc'

const Container = styled.div`
  border: 1px solid red;
`

const Content = styled.div`
  border: 1px solid red;
  flex: 1;
`

const Post = props => {
  const { post } = props

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={styles.container}>
        <Toc toc={post.content} />
        <Content>
          <ReactMarkdown remarkPlugins={[gfm]} components={CodeBlock}>
            {post.content}
          </ReactMarkdown>
          <ReactMarkdown remarkPlugins={[gfm]} components={CodeBlock}>
            {post.content}
          </ReactMarkdown>
          <ReactMarkdown remarkPlugins={[gfm]} components={CodeBlock}>
            {post.content}
          </ReactMarkdown>
          <ReactMarkdown remarkPlugins={[gfm]} components={CodeBlock}>
            {post.content}
          </ReactMarkdown>
          <ReactMarkdown remarkPlugins={[gfm]} components={CodeBlock}>
            {post.content}
          </ReactMarkdown>
        </Content>
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
