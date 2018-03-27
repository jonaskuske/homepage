import lsbShowcase from './images/lsbShowcase.jpg';
import lsb1 from './images/lsb1.jpg';
import lsb2 from './images/lsb2.jpg';

export default {
  title: '»Landessportbund Bremen«',
  showcase: {
    image: lsbShowcase,
    text: 'Prototype of a redesigned Homepage, made as part of a Corporate Design concept for the "Landessportbund Bremen". Apart from the design, the prototype already has some functionality built in, like live-searching lists and more. Built and animated using Vue.js.'
  },
  blocks: [
    {
      image: lsb1,
      text: 'The redesign incorporates a clean structure and is built following the guidelines I outlined in the <a href="/detail?project=lsb-design">Corporate Design Manual</a> for the LSB. This is most noticable with the typography and color scheme of the site. Following these principles, multiple pages were designed from scratch. When navigating between pages, an <a href="https://www.jonaskuske.com/lsb-loader/" rel="noopener" target="_blank">animated version</a> of the new, staircase-shaped logo shows the loading process.'
    },
    {
      image: lsb2,
      text: 'One of the redesigned sites is the page "sport offerings". On the old site, users first had to select from multiple dropdown menus and then manually start a search to see the available offerings. My version uses a results list that updates immediately after the user has typed into the search bar or filtered the results using one of the radio buttons. This was achieved by using multiple "computed properties" in Vue.js. The automatic updating of the results is animated using "FLIP transitions".'
    }
  ],
  footer: 'I presented the newly designed homepage to the »Landessportbund Bremen« in the winter of 2017/18 - the first feedback was very positive.'
};