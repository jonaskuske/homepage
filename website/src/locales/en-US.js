export default {
  App: {
    ColorSelection: {
      ColorButtonRandom: 'Random color',
      ColorButtonSelect: 'Select color',
      ColorButtonDevice: 'On device',
      ColorButtonPhone: 'On phone',
      ColorButtonPhoneOnly: 'Control colors remotely using your phone'
    },
    links: [
      { text: 'GitHub', href: 'https://github.com/jonaskuske' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
      { text: 'XING', href: 'https://www.xing.com/profile/Jonas_Kuske' },
      { text: 'Contact', href: 'mailto:mail@jonaskuske.com' },
    ],
    panel: {
      nav: [
        { text: 'Start', route: '/' },
        { text: 'Projects', route: '/projekte' },
        { text: 'About Me', route: '/me' },
        { text: 'Legal Notice', route: '/legal' }
      ]
    }
  },
  Splash: {
    h1: 'Welcome',
    text: 'I\'m Jonas Kuske, designer and developer in the making. I\'m studying »digital media production« at the University of Applied Sciences Bremerhaven. Due to my university course’s approach of teaching a broad spectrum of digital media, I have experience in many different areas, ranging from video production to computer animation - but my main focus clearly is web development and graphics design.',
    h2: 'Showcase'
  },
  Projects: {
    h1: 'Projects',
    text: {
      1: 'Next to the works displayed below, the portfolio site you\'re looking at is one of my projects as well. It is written in JSX and rendered by the JavaScript framework »hyperapp«, a minimalistic framework that works similar to React. Additionally, the site is built using state-of-the-art web technologies like CSS variables, code splitting and CSS grid. The source code can be found ',
      link: 'here.',
      2: 'Have fun discovering my projects!'
    }
  },
  About: {
    h1: 'About Me',
    introduction: {
      1: `
      I am Jonas Kuske, creative mind and passionate developer. <br />
      I've been into tech ever since I was a kid and when I fell in love with design during my final years in school, I decided to study "digital media production". The first semesters of my studies tought me skills from many different fields of media - video production, 3D modelling, prototyping - but creating interactive experiences always fascinated me the most.`,
      2: 'Because of this, I now put all my focus on modern web development and design and try to grow my skillset in parallel to my studies. For example I am working my way towards a Nanodegree as a "Mobile Web Specialist" courtesy of a Google Scholarship, I attend conferences and hackathons and always look for new ways to improve myself - because this line of work is ever-changing.'
    },
    iconLegendShow: 'Show icon legend ⬇',
    iconLegendClose: 'Hide icon legend ⬆',
    skills: [
      {
        type: 'Web Development',
        text: 'I have a special interest for modern web technologies blurring the lines between web and native applications. I enjoy working with various JavaScript frameworks and libraries like Vue and React and like to try out newer, smaller tools. Still, having a good understanding of vanilla JavaScript is important to me - especially because at least since ES2015 it has turned into a full-featured and at times even elegant language, in my opinion.',
        skills: [
          {
            name: 'JavaScript',
            color: '#f7e018',
            percentage: 89,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
          },
          {
            name: 'CSS',
            color: '#264de4',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
            percentage: 74
          },
          {
            name: 'Vue',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
            percentage: 81,
            color: '#41b883'
          },
          {
            name: 'React',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
            percentage: 41,
            color: '#61dbfb'
          },
          { name: 'GitHub', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/480px-Octicons-mark-github.svg.png', percentage: 72, color: 'black' },
          {
            name: 'Webpack',
            image: 'https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
            percentage: 69,
            color: 'blue'
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
          },
          {
            name: 'Premiere Pro',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
            percentage: 58,
            color: '#ca7dde'
          },
          {
            name: 'Autodesk Maya',
            image: 'https://pbs.twimg.com/profile_images/758337083610165253/SfZPDMSf_400x400.jpg',
            percentage: 34,
            color: '#01b7bb'
          },
          {
            name: 'Adobe XD',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Adobe_Experience_Design_logo.svg',
            percentage: 74,
            color: '#ff21bf'
          }
        ]
      }

    ]
  },
  Legal: {
    h1: 'Legal Notice',
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
        text: 'Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).',
        usageNotice: 'The header image and the second regular image of project "DMP Portfolio" are based upon mockups created by Anthony Boyd. The showcase mockup can be found <a href="https://www.anthonyboyd.graphics/mockups/2017/modern-responsive-showcase-mockup/" rel="noopener" target="_blank">here</a>, the other mockup can be found <a href="https://www.anthonyboyd.graphics/mockups/2017/modern-iphone-x-macbook-pro-mockup-vol-2/" rel="noopener" target="_blank">here</a>.'
      }
    },
    Privacy: {
      h1: 'Privacy',
      contactData: 'If you use the data from the imprint to contact us, we will use your contact data gathered from the sender information solely to respond to your inquiry. We will delete your contact data if you ask us to.',
      colorSync: 'If you use the remote control feature for this site\'s theme color, we generate a unique ID which is transmitted and stored on the server handling color sync. This is necessary so the server can establish a connection between the remote control and this site to sync the selected theme color. The ID is generated randomly, does not contain private information and is deleted from the server upon closing the page.',
      end: 'With exception of the cases described above, this site does not collect or use any personal information.'
    }
  },
  Error: {
    toStart: 'Back to Start',
    notFound1: 'Unfortunately, the requested page » ',
    notFound2: ' « does not exist on this site. :('
  },
  PairYourPhone: {
    h1: 'Pair your Phone',
    connecting: 'Trying to connect to the color server...',
    description: 'Visit <a href="https://jonaskuske.com/colorpicker" rel="noopener">jonaskuske.com/colorpicker</a> on your phone and scan the QR Code or enter your ID.',
    sessionID: 'Your unique session ID is: '
  }
};