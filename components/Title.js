import Head from 'next/head'

export default ({ children }) => (
  <Head>
    <title>Matías Lescano{children && ` | ${children}`}</title>
  </Head>
)
