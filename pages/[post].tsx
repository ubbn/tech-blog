import react from "react";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/CodeBlock";

const Post = ({ content, data }) => {
  const frontmatter = data;

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactMarkdown components={CodeBlock} children={content} />
    </>
  );
};

export default Post;

Post.getStaticProps = async ({ query }) => {
  const { post } = query;
  const content = await import(`../content/${post}.md`);
  const data = matter(content.default);

  return { ...data };
};
