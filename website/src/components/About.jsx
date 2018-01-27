import welcome from '@/assets/text/welcome.txt';
import codeText from '@/assets/text/code.txt';
import designText from '@/assets/text/design.txt';

export default ({ class: className, ...props }) => (
  <div key='about' class={`content-container ${className ? className : ''}`} {...props} >
    <h1>ÜBER MICH</h1>
    <p> {welcome} </p>
    <p> {codeText} </p>
    <p> {designText} </p>
  </div>
);