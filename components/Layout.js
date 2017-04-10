import Head from 'next/head'
import Title from './Title'

export default (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Title />
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito:300,700');

      * {
        box-sizing: border-box;
      }

      html,
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      button {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
      }

      body {
        font-size: 16px;
        font-family: Hack, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        line-height: 1;
        color: #525252;
        text-rendering: geometricPrecision;
        backgorund-color: #fafafa;
      }

      .container {
        padding-right: 20px;
        padding-left: 20px;
        max-width: 600px;
        width: 100%;
      }

      @media all and (min-width: 900px) {
        .container {
          margin-left: 38.5%;
          transform: translateX(-50%);
        }
      }

      img {
        max-width: 100%;
      }

      a {
        color: inherit;
        font-family: inherit;
        text-decoration: none;
      }

      a:hover,
      a.active {
        color: #f6cf0d;
      }

      h1 {
        font-size: 30px;
        line-height: 1.4;
      }

      h2 {
        font-size: 24px;
        line-height: 1.4;
      }

      p {
        font-size: 20px;
        line-height: 1.3;
      }

      h1 + p,
      h2 + p {
        margin-top: 10px;
      }

      strong {
        font-weight: bold;
      }
    `}</style>
    { props.children }
  </div>
)
