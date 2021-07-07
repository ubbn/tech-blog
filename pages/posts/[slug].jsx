import react from "react";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";
import { getPostBySlug, getAllPosts } from '../../components/utils'

const Post = (props) => {
  const { post } = props;

    return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* @ts-ignore */}
      <ReactMarkdown components={CodeBlock} >{post.content}</ReactMarkdown>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'description',
  ])
  // const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  console.log("getPaths: ", posts)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
