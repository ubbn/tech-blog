import React from 'react'
import gfm from 'remark-gfm'
import Head from 'next/head'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import styles from './Post.module.css'
import PostRenderer from '../../components/PostRenderer'
import { getPostBySlug, getAllPosts } from '../../components/utils'
import Toc from '../../components/Toc'

const Content = styled.div`
  flex: 1;
  margin-bottom: 100px;
`

const Date = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 150px 0;
  font-size: 14px;
  color: grey;
`

const Post = props => {
  const { post } = props
  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);
  
  React.useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      console.log("scrolling: ", e.target.documentElement.scrollTop)
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        <div className={styles.container}>
          <Toc data={post.content} />
          <Content>
            <ReactMarkdown remarkPlugins={[gfm]} components={PostRenderer}>
              {post.content}
            </ReactMarkdown>
          </Content>
        </div>
        <Date>{post.date}</Date>
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
