import codeText from '@/assets/text/code.txt';
import designText from '@/assets/text/design.txt';

export default [
  {
    type: 'Web Development',
    text: codeText,
    skills: [
      {
        name: 'JavaScript',
        color: '#f7e018',
        percentage: 88,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
      },
      {
        name: 'CSS',
        color: '#264de4',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        percentage: 65
      },
      {
        name: 'Vue',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
        percentage: 78,
        color: '#41b883'
      }
    ]
  },
  {
    type: 'Design',
    text: designText,
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
      }
    ]
  }

];