import Layout from '../components/Layout'
import Link from 'next/prefetch'

export default () => (
  <Layout>
    <main className='container'>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-height: 100vh;
          // border-right: 1px solid rgba(0, 0, 0, .03);
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
            prefetch={false}
            rel='noopener nofollow'>
            LinkedIn
          </Link>
          <Link
            href='https://github.com/mjlescano'
            prefetch={false}
            rel='noopener nofollow'>
            GitHub
          </Link>
          <Link href='mailto:matiasj.lescano@gmail.com' prefetch={false}>
            Email
          </Link>
        </div>
      </div>
    </main>
  </Layout>
)