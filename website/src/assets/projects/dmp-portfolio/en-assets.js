import dmpShowcase from './images/dmp-showcase.jpg'
import dmpThree from './images/dmpThree.jpg'
import dmpTwo from './images/dmpTwo.jpg'

export default {
  title: '»Digital Media Production«',
  showcase: {
    image: dmpShowcase,
    text:
      'To represent the university course »digital media production« at the University of Applied Sciences Bremerhaven, the university tasked me as part of a small team of students with designing and developing a portfolio website for the course. The site is supposed to showcase various works created by students, so potential applicants and other interested parties can see what »digital media production« is all about.',
  },
  blocks: [
    {
      image: dmpThree,
      text:
        'After a long design and conception phase, we settled for a design built around a tab-based navigation where the various content will be displayed within different tabs, yet all on a single (HTML) page. This gives users a blazingly fast experience and navigation – but requires the website to be a JavaScript-driven Single Page Application (SPA).',
    },
    {
      image: dmpTwo,
      text:
        'My team and I decided to use the JavaScript framework Vue.js combined with a modern build workflow powered by Webpack to implement the site as a SPA. The content for the application is managed through a "Headless CMS", a WordPress install customized for this use case. There, students can submit their work themselves – once a submitted project passes review, it is published and can be found on the website.',
    },
  ],
  footer:
    'The diverse showcased projects and the distinct state-of-the-art web application are meant to highlight the course\'s modern and practical orientation. The site can be found at <a href="https://dmp-bremerhaven.de" target="_blank" rel="noopener">dmp-bremerhaven.de</a>.',
}
