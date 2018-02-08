export default {
  App: {
    ColorButton1: 'Zufallsfarbe',
    ColorButton2: 'Farbe auswählen',
    links: [
      { text: 'GitHub', href: 'https://github.com/jonaskuske' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/in/jonaskuske/' },
      { text: 'Adobe Portfolio', href: 'http://jonaskuske.com' },
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
    h1: 'Über Mich'
  }
};