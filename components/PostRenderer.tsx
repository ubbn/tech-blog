import react from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const AddId = ({ data }) => {
  const {
    children,
    level,
    node: {
      position: {
        start: { line },
      },
    },
  } = data
  if (level === 1) return <h1 id={line}>{children}</h1>
  if (level === 2) return <h2 id={line}>{children}</h2>
  if (level === 3) return <h3 id={line}>{children}</h3>
  return <h4 id={line}>{children}</h4>
}

const PostRenderer = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={tomorrow}
        language={match[1]}
        PreTag="div"
        {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  h1(props) {
    return <AddId data={props} />
  },
  h2(props) {
    return <AddId data={props} />
  },
  h3(props) {
    return <AddId data={props} />
  },
  h4(props) {
    return <AddId data={props} />
  },
}

export default PostRenderer
