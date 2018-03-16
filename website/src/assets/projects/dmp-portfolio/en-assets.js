import dmpPortfolio from './images/showcase.jpg';

export default {
  title: '»Digital Media Production«',
  showcase: {
    image: dmpPortfolio,
    text: 'To represent the university course »digital media production« at the University of Applied Sciences Bremerhaven, the university tasked me as part of a small team of students with designing and developing a portfolio website for the course. The site is supposed to showcase various works created by students, so potential applicants and other interested parties can see what »digital media production« is all about.'
  },
  blocks: [
    {
      image: dmpPortfolio,
      text: 'After a long design and conception phase, we settled for a design built around a tab-based navigation where the various content will be displayed within different tabs, yet all on a single (HTML) page. This gives users a blazingly fast experience and navigation - but requires the website to be a JavaScript-driven Single Page Application (SPA).'
    },
    {
      image: dmpPortfolio,
      text: 'My team and I decided to use the JavaScript framework Vue.js combined with a modern build workflow powered by Webpack to implement the site as a SPA. The frontend has already made a lot of progress, a non-final version can be found <a href="http://dmp-portfolio.jonaskuske.com" rel="noopener" target="_blank">here</a>. <br/> In terms of backend, team and management are still evaluting the pros and cons of using a self written backend solution (PHP or Node) versus relying on a Headless CMS for content management.'
    },

  ],
  footer: 'Once the project is done, not only the presented content will show the focus of the university course »digital media production«. Thanks to the use of state-of-the-art technologies and tools like CSS Grid, Vue.js (+ Vuex & Vue Router), server side rendering in Node.js and Webpack code bundling the website itself will highlight the course\'s modern and practical orientation.'
};