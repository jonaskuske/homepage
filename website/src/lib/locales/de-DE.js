export default {
  App: {
    ColorButton1: 'Zufallsfarbe',
    ColorButton2: 'Farbe auswählen',
    links: [
      { text: 'GitHub', href: 'https://github.com/jonaskuske' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
      { text: 'Adobe Portfolio', href: 'https://jonaskuske.myportfolio.com' },
      { text: 'Kontakt', href: 'mailto:joku49@gmail.com' },
    ],
    panel: {
      nav: [
        { text: 'Start', route: '/' },
        { text: 'Projekte', route: '/projekte' },
        { text: 'Über mich', route: '/me' },
        { text: 'Impressum', route: '/impressum' }
      ]
    }
  },
  Splash: {
    h1: 'Willkommen',
    text: 'Ich bin Jonas Kuske, angehender Designer und Developer. Ich studiere »Digitale Medienproduktion« an der Hochschule Bremerhaven, ein Studiengang, der beinahe alle Facetten der Medienproduktion abdeckt, wodurch ich Grundkenntnisse in Bereichen von Videoproduktion bis hin zu 3D Animation besitze - meine Schwerpunkte liegen jedoch eindeutig bei Web Entwicklung und Grafikdesign.',
    h2: 'Highlights'
  },
  Projects: {
    h1: 'Projekte',
    text: {
      1: 'Neben den hier vorgestellten Arbeiten ist natürlich auch die Portfolio-Seite, die Sie gerade betrachten, eines meiner Projekte. Geschrieben ist sie mit Hilfe des JavaScript Frameworks »hyperapp«, einem minimalistischen Framework, das in seiner Funktionsweise React ähnelt. Außerdem wurde sie unter Zuhilfenahme modernster Browser-Technologien wie CSS Variablen oder CSS Grid gebaut. Der Quellcode ist ',
      link: 'hier',
      '1.1': ' zu sehen.',
      2: 'Viel Spaß beim Erkunden!'
    }
  },
  About: {
    h1: 'Über Mich',
    skills: [
      {
        type: 'Web Development',
        text: 'Moderne Web Technologien, die die Grenzen zwischen Internet und nativen Anwendungen verschwimmen lassen, interessieren mich besonders. Gerne arbeite ich mit modernen JavaScript Frameworks bzw.Libraries, insbesondere Vue und React, und probiere neue, kleinere Tools aus. Trotzdem ist es mir auch wichtig, ein gutes Verständnis von purem JavaScript zu haben - vor allem, weil die Sprache sich meiner Meinung nach spätestens mit ES2015 zu einer vollwertigen (und ab und zu sogar eleganten) Sprache entwickelt hat.',
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
          { name: 'GitHub', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', percentage: 72, color: 'black' },
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
        text: 'Gleichzeitig begeistere ich mich für modernes, cleanes Design. Klare, geometrische Formen und ein reduziertes, minimalistisches Erscheinungsbild sind meine goldenen Regeln - nur um sie in geeigneten Momenten durchbrechen zu können. Denn gutes Design ist berechenbar unberechnbar.',
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
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Adobe_XD_CC_logo.svg',
            percentage: 74,
            color: '#ff21bf'
          }
        ]
      }

    ]
  },
  Imprint: {
    h1: 'Impressum',
    law: 'Angaben gemäß §5 TMG',
    details: {
      title: 'Kontakt',
      phone: 'Telefon: +491603336948'
    },
    responsibility: 'Verantwortlich für Inhalte gemäß 55 Abs. 2 RStV:',
    h2: 'Haftungsauschluss',
    contents: {
      title: 'Haftung für Inhalte',
      text: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
    },
    links: {
      title: 'Haftung für Links',
      text: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
    },
    copyright: {
      title: 'Urheberrecht',
      text: 'Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
    }
  }
};