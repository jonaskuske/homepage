export default {
  App: {
    ColorButton1: 'Random color',
    ColorButton2: 'Select color',
    links: [
      { text: 'GitHub', href: 'https://github.com/jonaskuske' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
      { text: 'Adobe Portfolio', href: 'http://jonaskuske.com' },
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
    h1: 'About Me'
  }
};