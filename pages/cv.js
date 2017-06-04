import moment from 'moment'
import Link from 'next/link'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'

export default () => (
  <Layout>
    <style jsx>{`
      main {
        padding-top: 35px;
        padding-bottom: 35px;
      }

      .breadcrumbs {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: .85em;
      }

      .breadcrumbs a {
        font-weight: 300;
      }

      @media print {
        .breadcrumbs {
          display: none;
        }
      }
    `}</style>
    <div className='breadcrumbs container'>
      <Link href='/'><a>&lt; go back</a></Link>
    </div>
    <main className='container'>
      <Markdown>{`
        Matías Lescano
        ===

        ##### _matiasj.lescano@gmail.com_

        Hi! I'm Matías Lescano, Senior Javascript Engineer from Buenos Aires, Argentina.

        I like to do everything with a hands-on driven mind, and love to take  opportunities to resolve new challenges. My experience working with frontend and backend technologies allows me to deliver complete solutions, with clean design and attention to detail.

        Javascript and it's ecosystem is my main interest, but, I also love to improve my UX skills and be able to apply it on my everyday code.

        ## Work

        I'm currently working as **Technical Lead** at [Democracia en Red](https://democraciaenred.org/en), since march 2015. We strive to improve citizens' participation with local governments using open source tech.

        Our core project is [DemocracyOS](https://github.com/DemocracyOS/democracyos), an open source, free software, citizen participation platform, where you can debate and vote political proposals. We've been through [YCombinator](https://www.fastcompany.com/3043388/the-y-combinator-chronicles/why-y-combinator-funded-a-radical-political-party-in-argentina), and after that, we implemented it with the Argentine Government at [consultapublica.argentina.gob.ar](https://consultapublica.argentina.gob.ar) as a debate platform for new legislation. And, with the city of Rosario's Government on [participa.rosario.gob.ar](https://participa.rosario.gob.ar) to let the people vote citizen-written projects that will be part of the annual budget.

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
  </Layout>
)
