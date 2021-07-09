import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import styles from './Toc.module.css'

const Container = styled.div`
  border: 1px solid green;
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-width: 140px;
  white-space: nowrap;
  padding-left: 10px;
`

const Table = styled.div`
  cursor: pointer;
  h1 {
    font-size: 18px;
    display: none;
  }
  h2 {
    font-size: 17px;
    margin: 10px 0 10px 10px;
  }
  h3 {
    font-size: 15px;
    margin: 5px 0 0 20px;
    font-weight: normal;
  }
`

const Toc = props => {
  const { toc } = props
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  const content = toc
    .split('\n')
    .map(v => v.trim())
    .filter(v => v.startsWith('#'))
    .join('\n')

  const renderers = {
    h2({ children }) {
      return <h2>{children}</h2>
    },
  }

  return (
    <Container>
      <div className={styles.homeIcon} onClick={goHome}>
        <img src="../icon-home.svg" alt="Go home" width={24} height={24} />
      </div>
      {/* <div className={styles.table}> */}
      <Table>
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
      </Table>
    </Container>
  )
}

export default Toc
