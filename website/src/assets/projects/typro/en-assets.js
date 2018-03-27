/* eslint-disable quotes */

import showcase from './images/showcase.jpg';
import typroPixel from './images/block1.jpg';
import typroIPhone from './images/block2.jpg';
import typroIPhoneX from './images/block3.jpg';

export default {
  title: '»typro«',
  id: 'typro',
  showcase: {
    image: showcase,
    text: `„typro“ is a Progressive Web App allowing users to identify fonts using their smartphone's camera, storing the results including the photos and searching a catalogue containing many popular typefaces. It was one of my first projects and can be found <a href="https://typro.jonaskuske.com" target="_blank" rel="noopener">here</a>.`
  },
  blocks: [
    {
      image: typroPixel,
      text: `Idea, design and various marketing concepts were created as part of the subject „marketing“ in my university course. Together with my classmates <a href="http://riekehelmers.com" target="_blank" rel="noopener">Rieke Helmers</a> and <a href="https://maxmschneider.com" target="_blank" rel="noopener">Max M. Schneider</a> I built the app as a final exam for the subject "programming"; the project was graded with 99.5 out of 100 possible points. <br /> Goal of this course was to learn the fundamentals of JavaScript and jQuery.`
    },
    {
      image: typroIPhone,
      text: `The interface is built with jQuery Mobile - as was required by the university. Thanks to state-of-the-art webRTC APIs users are able to take pictures, which are then stored in a local database (IndexedDB). A service worker plus caching strategy allows the app to be used offline and even installed on supported devices. Available typefaces are displayed in the integrated font catalogue, the required information is read from an external XML file so the catalogue can be expanded with ease.`
    },
    {
      image: typroIPhoneX,
      text: `typro can be used by multiple users, it only displays the images the currently logged-in user took. The font catalogue, camera functionality and a lot more is fully functional - solely the typeface recognition is just simulated, as implementing optical image recognition would have gone beyond the scope of a prototype.`
    }
  ],
  footer: `Integrating a functional font recognition service is planned already, utilizing the open source library »typefont«. As analyzing the images for fonts is quite ressource-heavy, the recognition will have to be performed on the server in Node.js to ensure satisfying performance and speed. On slow mobile devices, font recognition with »typefont« can take up to multiple minutes - so an offline, on-device recogniton is not a viable option on such devices. The codebase for typro can be found <a href="https://github.com/jonaskuske/typro" rel="noopener" target="_blank">here</a>.`
};