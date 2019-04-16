import dmpShowcase from './images/dmp-showcase.jpg'
import dmpThree from './images/dmpThree.jpg'
import dmpTwo from './images/dmpTwo.jpg'

export default {
  title: '»Digitale Medienproduktion«',
  showcase: {
    image: dmpShowcase,
    text:
      'Um den Studiengang „Digitale Medienproduktion" der Hochschule Bremerhaven zu repräsentieren und klar zu kommunizieren, welche Inhalte der Studiengang umfasst, beauftragte die Hochschule mich als Teil eines kleinen studentischen Teams, eine Portfolio-Website für den Studiengang zu entwickeln und umzusetzen. Diese zeigt verschiedene studentische Arbeiten, sodass Bewerber und Interessenten sehen können, welche Kenntnisse und Fähigkeiten in „Digitale Medienproduktion“ vermittelt werden.',
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
        'Für die Realisierung als SPA entschied sich unser Team für das JavaScript Framework Vue.js und einem modernen Build-Workflow basierend auf der Vue CLI/Webpack. Die Inhalte der Website werden in einem "Headless CMS", einer speziell für diesen Use Case angepassten WordPress-Installation, verwaltet. Dort können die Studierenden selbst Projekte einreichen, die dann nach Überprüfung veröffentlicht werden.',
    },
  ],
  footer:
    'Die vielfältigen ausgestellten Arbeiten und die individuelle, zeitgemäße Webanwendung sollen die moderne und branchennahe Ausrichtung des Studiengangs veranschaulichen. Zu finden ist die Website unter <a href="https://dmp-bremerhaven.de" target="_blank" rel="noopener">dmp-bremerhaven.de</a>.',
}
