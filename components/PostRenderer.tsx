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
    color: #00000080;
  }
  :hover:after {
    margin-left: 5px;
    color: #00000080;
    content: '##';
  }
`

const InlineCode = styled.code`
  background-color: #dadde1;
  padding: 1px 3.4px;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  line-height: 1.8;
`

type HeadingProps = {
  children: React.ReactChildren
  level: number
  node: {
    position: {
      start: {
        line: number
      }
    }
  }
}

const Heading = (props: HeadingProps) => {
  const router = useRouter()

  const {
    children,
    level,
    node: {
      position: {
        start: { line },
      },
    },
  } = props

  const onClick = () => router.push('#' + line)

  if (level === 1)
    return (
      <H1 onClick={onClick} id={String(line)}>
        {children}
      </H1>
    )
  if (level === 2)
    return (
      <H2 onClick={onClick} id={String(line)}>
        {children}
      </H2>
    )
  if (level === 3)
    return (
      <H3 onClick={onClick} id={String(line)}>
        {children}
      </H3>
    )
  return <h4 id={String(line)}>{children}</h4>
}

type PostProps = {
  inline: boolean
  className: string
  children: React.ReactChildren
}

const PostRenderer = {
  code({ inline, className, children, ...props }: PostProps) {
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
      <InlineCode {...props}>{children}</InlineCode>
    )
  },
  h1(props: HeadingProps) {
    return <Heading {...props} />
  },
  h2(props: HeadingProps) {
    return <Heading {...props} />
  },
  h3(props: HeadingProps) {
    return <Heading {...props} />
  },
  h4(props: HeadingProps) {
    return <Heading {...props} />
  },
}

export default PostRenderer
