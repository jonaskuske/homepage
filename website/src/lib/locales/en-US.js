export default {
  App: {
    ColorButton1: 'Random color',
    ColorButton2: 'Select color',
    links: [
      { text: 'GitHub', href: 'https://github.com/jonaskuske' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
      { text: 'Adobe Portfolio', href: 'https://jonaskuske.myportfolio.com' },
      { text: 'Contact', href: 'mailto:joku49@gmail.com' },
    ],
    panel: {
      nav: [
        { text: 'Start', route: '/' },
        { text: 'Projects', route: '/projekte' },
        { text: 'About Me', route: '/me' },
        { text: 'Imprint', route: '/impressum' }
      ]
    }
  },
  Splash: {
    h1: 'Welcome',
    text: 'I\'m Jonas Kuske, designer and developer in the making. I study »digital media production« at the University of Applied Sciences Bremerhaven. Due to my university course’s approach of teaching a broad spectrum of digital media, I have experience in many different areas, ranging from video production to computer animation - but my main focus clearly is web development and graphics design.',
    h2: 'Showcase'
  },
  Projects: {
    h1: 'Projects',
    text: {
      1: 'Next to the works displayed below, the portfolio site you\'re looking at is one of my projects as well. It is written in JSX and rendered by the JavaScript framework »hyperapp«, a minimalistic framework that works similar to React. Additionally, the site is built using state-of-the-art web technologies like CSS variables, code splitting or CSS grid. The source code can be found ',
      link: 'here.',
      2: 'Have fun discovering my projects!'
    }
  },
  About: {
    h1: 'About Me',
    skills: [
      {
        type: 'Web Development',
        text: 'I have a special interest for modern web technologies blurring the lines between web and native applications. I enjoy working with various JavaScript frameworks and libraries like Vue and React and like to try out newer, smaller tools. Still, having a good understanding of vanilla JavaScript is important to me - especially because at least since ES2015 it has turned into a full-featured and at times even elegant language, in my opinion.',
        skills: [
          {
            name: 'JavaScript',
            color: '#f7e018',
            percentage: 88,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
          },
          {
            name: 'CSS',
            color: '#264de4',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
            percentage: 65
          },
          {
            name: 'Vue',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
            percentage: 78,
            color: '#41b883'
          }
        ]
      },
      {
        type: 'Design',
        text: 'At the same time I\'m into modern and sleek design. Clear, geometric elements and a minimalistic look are my golden rules - only to break them when neccessary. Good design is predictably unpredictable.',
        skills: [
          {
            name: 'Illustrator',
            color: 'rgb(243, 112, 33)',
            percentage: 82,
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg'
          },
          {
            name: 'Photoshop',
            color: 'rgb(37, 214, 249)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png',
            percentage: 57
          },
          {
            name: 'After Effects',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
            percentage: 38,
            color: 'rgb(211, 164, 255)'
          }
        ]
      }

    ]
  },
  Imprint: {
    h1: 'Imprint',
    law: 'Information in accordance with section §5 TMG',
    details: {
      title: 'Contact',
      phone: 'Phone: +491603336948'
    },
    responsibility: 'Person responsible for content in accordance with 55 Abs. 2 RStV',
    h2: 'Disclaimer',
    contents: {
      title: 'Accountability for content',
      text: 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents\' accuracy, completeness or topicality.According to statutory provisions, we are furthermore responsible for our own content on these web pages.In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act(TMG).'
    },
    links: {
      title: 'Accountability for links',
      text: 'Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.'
    },
    copyright: {
      title: 'Copyright',
      text: 'Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).'
    }
  }
};