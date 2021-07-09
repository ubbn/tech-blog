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

const parse = value => {
  if (!value) return {}
  const last = value.lastIndexOf('::')
  return {
    content: value.substring(0, last),
    id: value.substring(last + 2),
  }
}

const AddHref = ({ data }) => {
  const { content, id } = data
  return <a href={'#' + id}>{content}</a>
}

const renderers = {
  h1({ children }) {
    return (
      <h1>
        <AddHref data={parse(children[0])} />
      </h1>
    )
  },
  h2({ children }) {
    return (
      <h2>
        <AddHref data={parse(children[0])} />
      </h2>
    )
  },
  h3({ children }) {
    return (
      <h3>
        <AddHref data={parse(children[0])} />
      </h3>
    )
  },
  h4({ children }) {
    return (
      <h4>
        <AddHref data={parse(children[0])} />
      </h4>
    )
  },
}

const Toc = props => {
  const { data } = props
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  const toc = data
    .split('\n')
    .map((v, i) => `${v.trim()}::${i + 1}`)
    .filter(v => v.startsWith('#'))
    .join('\n')

  return (
    <Container>
      <div className={styles.homeIcon} onClick={goHome}>
        <img src="../icon-home.svg" alt="Go home" width={24} height={24} />
      </div>
      <Table>
        <ReactMarkdown components={renderers}>{toc}</ReactMarkdown>
      </Table>
    </Container>
  )
}

export default Toc
