import React from 'react'
import ReactMarkdown from 'react-markdown'

const Toc = props => {
  const { toc } = props

  const content = toc
    .split('\n')
    .map(v => v.trim())
    .filter(v => v.startsWith('#'))
    .join('\n')

  const renderers = {
    h2({ children }) {
      return <small>Ö - {children}</small>
    },
  }

  return (
    <>
      <div>
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
      </div>
    </>
  )
}

export default Toc
