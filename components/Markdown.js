import ReactMarkdown from 'react-markdown'

export default ({ children }) => (
  <div className='markdown'>
    {parse(children)}
  </div>
)

function parse (child) {
  if (Array.isArray(child)) return child.map(parse)

  if (typeof child === 'object') return child

  if (typeof child !== 'string') {
    throw new Error('Child should be a parseable markdown string.')
  }

  return <ReactMarkdown source={stripIndent(child)} />
}

function stripIndent (str) {
  const match = str.match(/^[ \t]*(?=\S)/gm)

  if (!match) {
    return str
  }

  const indent = Math.min.apply(Math, match.map((x) => x.length))
  const re = new RegExp(`^[ \\t]{${indent}}`, 'gm')

  return indent > 0 ? str.replace(re, '') : str
}
