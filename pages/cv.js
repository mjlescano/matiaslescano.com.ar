import Head from 'next/head'
import Link from 'next/prefetch'
import Title from '../components/Title'

export default () => (
  <main className='container'>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Title />
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito:300,700');

      * {
        box-sizing: border-box;
      }

      html, body, h1, h2, h3, h4, h5, h6, p, button {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
      }

      body {
        font-size: 16px;
        padding-top: 50px;
        padding-bottom: 50px;
        font-family: 'Nunito', sans-serif;
        line-height: 1;
        color: #525252;
        text-rendering: geometricPrecision;
      }

      .container {
        margin-left: auto;
        margin-right: auto;
        padding-right: 10px;
        padding-left: 10px;
        max-width: 680px;
      }

      @media all and (min-width: 996px) {
        .tabbed {
          padding-left: 83px;
        }
      }

      img {
        max-width: 100%;
      }

      a {
        color: inherit;
        font-family: inherit;
        text-decoration: none;
        font-weight: bold;
      }

      a:hover,
      a.active {
        color: #f6cf0d;
      }

      h1 {
        font-size: 2em;
        line-height: 1.4;
      }

      h2 {
        margin-top: 1.5em;
        margin-bottom: .3em;
        font-size: 1.5em;
        line-height: 1.4;
      }

      h3 {
        margin: 0;
        font-weight: bold;
        font-size: 1em;
        line-height: 1.3;
      }

      sub {
        font-size: .8em;
        opacity: .5;
        vertical-align: inherit;
      }

      p + h3 {
        margin-top: .5em;
      }

      p {
        margin: 0;
        font-size: 16px;
        line-height: 1.3;
      }

      p.lead {
        font-size: 20px;
        line-height: 1.3;
      }

      strong {
        font-weight: bold;
      }
    `}</style>

    <style jsx>{`
      .email {
        margin-top: 0;
        line-height: .9;
      }

      .contact :global(a) {
        margin-right: .8em;
      }
    `}</style>

    <h1>Matías Lescano</h1>
    <p className='email'>
      <Link href='mailto:matiasj.lescano@gmail.com' prefetch={false}>
        matiasj.lescano@gmail.com
      </Link>
    </p>

    <br />

    <p className='lead'>Hi! I'm Matías Lescano, full-stack developer from Buenos Aires, Argentina.</p>

    <h2>Work</h2>
    <p>
      I'm currently working as <strong>Technical Lead</strong> at <Link href='https://democraciaenred.org/en' prefetch={false} rel='noopener nofollow'><strong>Democracia en Red</strong></Link>, since march 2015. We strive to improve citizens participation with it's local government using open source tech.
    </p>

    <br />

    <p>Our core project is <Link href='https://github.com/DemocracyOS/democracyos' prefetch={false} rel='noopener nofollow'><strong>DemocracyOS</strong></Link>, an open-source citizens participation platform, where you can deliberate and vote on political proposals.</p>
    <p>Thanks to our work with DemocracyOS we've been through <Link href='https://www.fastcompany.com/3043388/the-y-combinator-chronicles/why-y-combinator-funded-a-radical-political-party-in-argentina' prefetch={false} rel='noopener nofollow'><strong>YCombinator</strong></Link> and are backed by many international philanthropic organisations like Avina, Open Society Foundations, the World Justice Project, among others.</p>
    <p>Currently is beign used by the Argentinian Government on <Link href='https://consultapublica.argentina.gob.ar' prefetch={false} rel='noopener nofollow'><strong>consultapublica.argentina.gob.ar</strong></Link> as a delibaration platform for new rulings, and by Rosario's City Government on <Link href='https://participa.rosario.gob.ar' prefetch={false} rel='noopener nofollow'><strong>participa.rosario.gob.ar</strong></Link> to vote projects, written by the citizens, that will be part of the annual budget.</p>

    <h2>Side-projects</h2>

    <h3><Link href='http://www.civicstack.org/' prefetch={false} rel='noopener nofollow'>civicstack.org</Link> <sub><Link href='https://github.com/CivicStack/civicstack' prefetch={false} rel='noopener nofollow'>&#40;src&#41;</Link></sub></h3>
    <p>CivicStack is the place to discover and share civic open source tools. It&#39;s goal is to provide easy access of civic digital tools to organizations, activists and governments so they can innovate in their daily work. I developed mostly all the front-end, and currently we're migrating it to React.</p>
    <h3><Link href='http://piet.com.ar' prefetch={false} rel='noopener nofollow'>piet.com.ar</Link></h3>
    <p>Ecommerce for PIET; classy men&#39;s clothes & apparel crafted by <Link href='https://linkedin.com/in/ian-van-lierde-0b231256' prefetch={false} rel='noopener nofollow'>Ian Van Lierde</Link>. Site&#39;s designed by <Link href='https://pazarando.com.ar/' prefetch={false} rel='noopener nofollow'>Paz Arando</Link>, and everything that's codeable by me. Did the backend with Spree, a framework written in Ruby for ecommerce solutions, and the front-end with vanilla JS, HTML, and CSS.</p>
    <h3><Link href='https://hechalaley.org' prefetch={false} rel='noopener nofollow'>hechalaley.org</Link> <sub><Link href='https://github.com/DemocraciaEnRed/billtracker' prefetch={false} rel='noopener nofollow'>&#40;src&#41;</Link></sub></h3>
    <p>HeachaLaLey is a work in progress bill tracking utility for congresses. It let&#39;s you follow the history of changes made to a bill until it reaches the voting step. It&#39;s a conjoined effort we&#39;re conceiving at Democracia en Red with <Link href='http://en.directoriolegislativo.org' prefetch={false} rel='noopener nofollow'>Directorio Legislativo</Link>.</p>

    <h2>Skills & Expertise</h2>

    <h3>Development Process</h3>
    <p>I have experience working on agile teams. For 3 years we used Pivotal Tracker to work on sprints of 2 weeks at GoodPeople. Currently I manage and pririotize issues using Github Projects; a new Kanban-like interface from Github.</p>
    <p>In this process is essential to have all the critical paths with Tests, and we run them with a continuous integration tool like TravisCI or CodeShip.</p>

    <br />

    <h3>HTML5 & CSS3 <sub>8+ years</sub></h3>
    <p>Always loved transforming design to code and I have a good time when discussing the possibilities of a design, and explaining the weaknesses and strengths of coding it for browsers.</p>
    <p>Transpilers are the way to go when writing large applications, and I have solid experience working with Handlebars, Mustache, Jade, and HAML to ease the writing of HTML, and with SCSS and Stylus to write CSS.</p>
    <p>A good example of something I done is <Link href='http://ullmannayarza.com' prefetch={false} rel='noopener nofollow'>ullmannayarza.com</Link>, it even works with JS deactivated.</p>

    <h3>Javascript <sub>6+ years</sub></h3>
    <p>I breath JS on my everyday life. I have experience architecturing the front-end of <Link href='http://goodpeople.com' prefetch={false} rel='noopener nofollow'>goodpeople.com</Link>, and currently leading the development of <Link href='https://github.com/DemocracyOS/democracyos' prefetch={false} rel='noopener nofollow'>DemocracyOS</Link> which includes a complete rewriting to React + Redux. As past experiences I&#39;ve used Backbone.js and I'm very proficient with jQuery.</p>
    <p>Nevertheless, for small projects I prefer to use Vanilla JS, with little libraries like <Link href='https://visionmedia.github.io/page.js/' prefetch={false} rel='noopener nofollow'>Page.js</Link> or <Link href='https://github.com/mjlescano/domator' prefetch={false} rel='noopener nofollow'>Domator</Link>, a DOM creation utility I made.</p>

    <h3>Node.js <sub>3+ years</sub></h3>
    <p>Currently using it for back-end development at DemocracyOS. Where I&#39;m having a really good experience with it&#39;s async nature.</p>

    <h3>PHP <sub>3+ years</sub></h3>
    <p>My first professional experience with coding was with PHP, and for 3 years I gained experience with large frameworks like CakePHP and CodeIgniter, worked a lot with WordPress, and using it as-is for little projects.</p>

    <h3>Databases</h3>
    <p>For 5 years I worked with relational databases like MySQL and PostgreSQL, and the last two years I gained experience with MongoDB a non-relational database.</p>

    <h3>DevOps / Docker</h3>
    <p>The last year I gained a lot of experience creating and managing a Docker-based architecture for DemocracyOS. I implemented consultapublica.argentina.gob.ar and participa.rosario.gob.ar with a server running with docker-compose, and our main servers runnning on Docker Cloud with a swarm of 3 VMs running on Azure for democracyos.org</p>

    <h2>Languages</h2>
    <h3>Spanish</h3>
    <p>Native language.</p>
    <h3>English</h3>
    <p>Full professional proficiency.</p>

    <h2>In the wild</h2>
    <div className='contact'>
      <h3>
        <Link href='https://matiaslescano.com.ar' prefetch={false}>
          matiaslescano.com.ar
        </Link>
      </h3>
      <p>my personal site.</p>
      <h3>
        <Link
          href='https://ar.linkedin.com/in/matías-lescano-229533b3'
          prefetch={false}
          rel='noopener nofollow'>
          linkedin.com/in/matías-lescano-229533b3
        </Link>
      </h3>
      <p>my LinkedIn profile, here's my entire work history and studies. </p>
      <h3>
        <Link
          href='https://github.com/mjlescano'
          prefetch={false}
          rel='noopener nofollow'>
          github.com/mjlescano
        </Link>
      </h3>
      <p>I mostly do open-source, and Github is where all my code lives.</p>
    </div>
  </main>
)
