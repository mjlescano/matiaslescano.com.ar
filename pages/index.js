import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <main className='container'>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-height: 100vh;
        }

        h1 {
          font-size: 24px;
          margin-bottom: .3em;
        }

        .contact :global(a) {
          font-size: 13px;
        }

        .contact :global(a) + :global(a) {
          margin-left: 2em;
        }
      `}</style>
      <div className='me'>
        <h1>Matías Lescano</h1>
        <div className='contact'>
          <Link
            href='https://ar.linkedin.com/in/matías-lescano-229533b3'
            rel='noopener nofollow'>
            <a>LinkedIn</a>
          </Link>
          <Link
            href='https://github.com/mjlescano'
            rel='noopener nofollow'>
            <a>GitHub</a>
          </Link>
          <Link href='mailto:matiasj.lescano@gmail.com' prefetch={false}>
            <a>Email</a>
          </Link>
        </div>
      </div>
    </main>
  </Layout>
)
