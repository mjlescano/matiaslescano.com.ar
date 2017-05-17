import moment from 'moment'
import Head from 'next/head'
import Title from '../components/Title'
import Markdown from '../components/Markdown'

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

      img {
        max-width: 100%;
      }

      a {
        color: inherit;
        font-family: inherit;
        text-decoration: none;
        font-weight: bold;
        color: #f6cf0d;
        hyphens: initial;
      }

      h1 {
        margin: 0 0 .1em;
        font-size: 2em;
        line-height: 1.4;
      }

      h2 {
        margin-top: 1em;
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

      h4 {
        margin-top: .5em;
        font-size: 20px;
        line-height: 1.4;
      }

      h5 {
        margin-top: 0;
        margin-bottom: 1.5em;
        line-height: .9;
        font-size: 1em;
      }

      h3 em {
        font-size: .8em;
        opacity: .5;
        vertical-align: inherit;
      }

      p + h3 {
        margin-top: .5em;
      }

      p {
        hyphens: auto;
        margin: 0 0 .8em;
        font-size: 16px;
        line-height: 1.3;
      }

      strong {
        font-weight: bold;
      }

      hr {
        border: none;
        page-break-before: always;
      }
    `}</style>
    <Markdown>{`
      Matías Lescano
      ===

      ##### _matiasj.lescano@gmail.com_

      Hi! I'm Matías Lescano, Senior Javascript Engineer from Buenos Aires, Argentina.

      I like to do everything with a hands-on driven mind, and love to take  opportunities to resolve new challenges. My experience working with frontend and backend technologies allows me to deliver complete solutions, with clean design and attention to detail.

      Javascript and it's ecosystem is my main interest, but, I also love to improve my UX skills and be able to apply it on my everyday code.

      ## Work

      I'm currently working as **Technical Lead** at [**Democracia en Red**](https://democraciaenred.org/en), since march 2015. We strive to improve citizens' participation with local governments using open source tech.

      Our core project is [**DemocracyOS**](https://github.com/DemocracyOS/democracyos), an open source, free software, citizen participation platform, where you can debate and vote political proposals. We've been through [**YCombinator**](https://www.fastcompany.com/3043388/the-y-combinator-chronicles/why-y-combinator-funded-a-radical-political-party-in-argentina), and after that, we implemented it with the Argentine Government at [**consultapublica.argentina.gob.ar**](https://consultapublica.argentina.gob.ar) as a debate platform for new legislation. And, with the city of Rosario's Government on [**participa.rosario.gob.ar**](https://participa.rosario.gob.ar) to let the people vote citizen-written projects that will be part of the annual budget.

      ## Side-projects

      ### [civicstack.org](http://www.civicstack.org/) [_(src)_](https://github.com/CivicStack/civicstack)

      CivicStack is the place to discover and share civic open source tools. Its goal is to provide easy access of tools to organizations, activists and governments so that they can innovate in their daily work. I developed almost the entire front-end, and we're currently migrating it to React.

      ### [piet.com.ar](http://piet.com.ar)

      Ecommerce for PIET; men's clothes & apparel crafted by [Ian Van Lierde](https://linkedin.com/in/ian-van-lierde-0b231256). The site was designed by [Paz Arando](https://pazarando.com.ar/), and everything that's codeable by me. I did the backend with Spree, a framework written in Ruby for ecommerce solutions; and the front-end with vanilla JS, HTML, and CSS.

      ### [hechalaley.org](https://hechalaley.org) [_(src)_](https://github.com/CivicStack/civicstack)

      HechaLaLey is a work in progress bill-tracking utility for parliaments. It lets you follow the history of changes made to a bill until it reaches the voting step. It's a joined effort conceived at Democracia en Red with [Directorio Legislativo](http://en.directoriolegislativo.org).

      ---

      ## Skills & Expertise

      ### Development Process

      I have experience working on agile teams. For 3 years we used Pivotal Tracker to work on sprints of 2 weeks at GoodPeople. Currently I manage and pririotize issues using Github Projects; a new Kanban-like interface from Github.

      ### HTML5 & CSS3 _8+ years_

      I always loved transforming design into code and I enjoy discussing the possibilities of a design, and explaining their weaknesses and strengths in terms of code.

      Transpilers are the way to go when writing large applications, and I have solid experience working with Handlebars, Mustache, Jade, and HAML to ease the writing of HTML, and with SCSS and Stylus to write CSS. A good example of something I've done is [ullmannayarza.com](http://ullmannayarza.com), it even works with JS deactivated.

      ### Javascript _7+ years_

      I breath JS on my everyday life. I have experience building the front-end architecture of [goodpeople.com](https://goodpeople.com), and am currently leading the development of [DemocracyOS](https://github.com/DemocracyOS/democracyos), which includes a complete rewriting into React + Redux. In past experiences I've used Backbone.js and jQuery a lot.

      Nevertheless, for small projects I prefer to use Vanilla JS, with little libraries like [Page.js](https://visionmedia.github.io/page.js/) or [Domator](https://github.com/mjlescano/domator), a DOM creation utility I made.

      ### Node.js _3+ years_

      I'm currently using it for back-end development at DemocracyOS. Where I'm having a really good experience with its async nature.

      For example, I did [DemocracyOS/manager](https://github.com/DemocracyOS/manager), an API for managing multiple instances for DemocracyOS that leverages [Deis](http://deis.io/) for independent VM deployments. And, a more current example is the complete rewrite of the API for DemocracyOS that can be seen [here](https://github.com/DemocracyOS/democracyos/tree/master/lib/api-v2).

      ### PHP _3+ years_

      My first professional experience with coding was with PHP, and for 3 years I gained experience with large frameworks like CakePHP and CodeIgniter, worked a lot with WordPress, and using it as-is for little projects.

      ### Databases

      For 5 years I worked with relational databases like MySQL and PostgreSQL, and the last two years I gained experience with MongoDB, a non-relational database.

      ### DevOps / Docker

      Over the last year I gained a lot of experience creating and managing a Docker-based architecture for DemocracyOS. I implemented consultapublica.argentina.gob.ar and participa.rosario.gob.ar with a server running with docker-compose, and our main servers runnning on Docker Cloud with a swarm of VMs running on Azure for democracyos.org.

      ---

      ## Attributes

      ### Birthday
      8th Dec 1989 _(${moment([1989, 11, 8]).fromNow(true)})_

      ### Languages
      Native _**Spanish**_ speaker, and fluent professional proficiency with _**English**_.

      ## In the wild

      ### [matiaslescano.com.ar](https://matiaslescano.com.ar)
      my personal site.

      ### [linkedin.com/in/mjlescano](https://ar.linkedin.com/in/matías-lescano-229533b3)
      my LinkedIn profile, here's my entire work history and studies.

      ### [github.com/mjlescano](https://github.com/mjlescano)
      I mostly do open source, and Github is where all my code lives.
    `}</Markdown>
  </main>
)
