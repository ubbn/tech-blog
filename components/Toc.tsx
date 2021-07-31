import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import styles from './Toc.module.css'

const Container = styled.div`
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-width: 140px;
  white-space: nowrap;
  padding-left: 20px;
  border-left: 1px solid #dadde1;
  margin-top: 20px;
  margin-left: 10px;
`

const Table = styled.div`
  cursor: pointer;
  color: gray;
  h1 {
    font-size: 19px;
  }
  h2 {
    font-size: 15px;
    margin: 10px 0 10px 0px;
  }
  h3 {
    font-size: 15px;
    margin: 5px 0 0 20px;
    font-weight: normal;
  }
  h4 {
    font-size: 13px;
    margin: 5px 0 0 40px;
    font-weight: normal;
  }
`

const parse = (value: string) => {
  if (!value) return {}
  const last = value.lastIndexOf('::')
  return {
    content: value.substring(0, last),
    id: value.substring(last + 2),
  }
}

type AddHrefProps = {
  content?: string
  id?: string
}

type HeadingProps = {
  children: any[]
}

const AddHref = (props: AddHrefProps) => {
  const { content, id } = props
  return <a href={'#' + id}>{content}</a>
}

const renderers = {
  h1({ children }: HeadingProps) {
    return (
      <h1>
        <AddHref {...parse(children[0] as string)} />
      </h1>
    )
  },
  h2({ children }: HeadingProps) {
    return (
      <h2>
        <AddHref {...parse(children[0] as string)} />
      </h2>
    )
  },
  h3({ children }: HeadingProps) {
    return (
      <h3>
        <AddHref {...parse(children[0] as string)} />
      </h3>
    )
  },
  h4({ children }: HeadingProps) {
    return (
      <h4>
        <AddHref {...parse(children[0] as string)} />
      </h4>
    )
  },
}

export const parseToc = (data: string) => {
  const toc: string[] = []
  let comment = false
  data.split('\n').forEach((line, i) => {
    if (line && line.startsWith('```')) {
      comment = !comment
    }
    if (!comment && line.startsWith('#')) {
      toc.push(`${line.trim()}::${i + 1}`)
    }
  })
  return toc.join('\n')
}

type TocProps = {
  data: string
}

const Toc = (props: TocProps) => {
  const { data } = props
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <Container>
      <div className={styles.homeIcon} onClick={goHome}>
        <img src="../icon-home.svg" alt="Go home" width={24} height={24} />
      </div>
      <Table>
        <ReactMarkdown components={renderers}>{parseToc(data)}</ReactMarkdown>
      </Table>
    </Container>
  )
}

export default Toc
