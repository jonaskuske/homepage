import dmpShowcase from './images/dmp-showcase.jpg'
import dmpThree from './images/dmpThree.jpg'
import dmpTwo from './images/dmpTwo.jpg'

export default {
  title: '»Digitale Medienproduktion«',
  showcase: {
    image: dmpShowcase,
    text:
      'Um den Studiengang „Digitale Medienproduktion" der Hochschule Bremerhaven zu repräsentieren und klar zu kommunizieren, welche Inhalte der Studiengang umfasst, beauftragte die Hochschule mich als Teil eines kleinen studentischen Teams, eine Portfolio-Website für den Studiengang zu entwickeln und umzusetzen. Diese soll verschiedenste studentische Arbeiten veröffentlichen, sodass Bewerber und Interessenten sehen können, welche Kenntnisse und Fähigkeiten in „Digitale Medienproduktion“ vermittelt werden.',
  },
  blocks: [
    {
      image: dmpThree,
      text:
        'Nach einer langen Design- und Konzeptionsphase fiel der Entschluss schließlich auf eine Tab-basierte Navigation, bei der die unterschiedlichen Inhalte verteilt auf verschiedene Tabs, aber alle innerhalb einer Seite, dargestellt werden. Dies ermöglicht dem Nutzer eine schnelle und natürliche Navigation ohne spürbare Ladezeiten – erfordert für die Umsetzung allerdings das Programmieren einer Single Page Application (SPA).',
    },
    {
      image: dmpTwo,
      text:
        'Für die Realisierung als SPA entschied sich unser Team für das JavaScript Framework Vue.js und einen modernen Build-Workflow basierend auf Webpack 3. Das Frontend ist bereits weit fortgeschritten, eine nonfinale Testversion lässt sich <a href="http://dmp-portfolio.jonaskuske.com" rel="noopener" target="_blank">hier</a> begutachten. <br/> Was das Backend betrifft, evaluieren Team & Management aktuell noch die Vor- und Nachteile von selbstgeschriebenem Backend (Node oder PHP) und der Verwendung eines Headless CMS.',
    },
  ],
  footer:
    'Sobald das Projekt fertiggestellt ist, werden nicht nur die dargestellten Inhalte ein Gefühl für die Ausrichtung des Studiengangs vermitteln. Dank Einsatz modernster Technologien und Tools wie CSS Grid, Vue.js (+ Vuex & Vue Router), Server Side Rendering in Node.js und durch Webpack optimierte Code Bundles wird auch die Website als solche die moderne und branchennahe Ausrichtung des Studiengangs veranschaulichen.',
}
