import react from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const H1 = styled.h1`
  cursor: pointer;
  :hover {
    color: #00000090;
  }
`
const H2 = styled.h2`
  cursor: pointer;
  :hover {
    color: #00000080;
  }
  :hover:after {
    margin-left: 5px;
    color: #00000080;
    content: '#';
  }
`

const H3 = styled.h3`
  cursor: pointer;
  cursor: pointer;
  :hover {
    color: #00000040;
  }
  :hover:after {
    margin-left: 5px;
    color: #00000040;
    content: '##';
  }
`

const AddId = ({ data }) => {
  const router = useRouter()

  const {
    children,
    level,
    node: {
      position: {
        start: { line },
      },
    },
  } = data

  const onClick = () => router.push('#' + line)

  if (level === 1)
    return (
      <H1 onClick={onClick} id={line}>
        {children}
      </H1>
    )
  if (level === 2)
    return (
      <H2 onClick={onClick} id={line}>
        {children}
      </H2>
    )
  if (level === 3)
    return (
      <H3 onClick={onClick} id={line}>
        {children}
      </H3>
    )
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
