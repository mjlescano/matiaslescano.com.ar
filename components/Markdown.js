import ReactMarkdown from 'react-markdown'
import stripIndent from 'strip-indent'

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
