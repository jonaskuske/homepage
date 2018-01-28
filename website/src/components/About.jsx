import codeText from '@/assets/text/code.txt';
import designText from '@/assets/text/design.txt';

export default ({ class: className, state, ...props }) => (
  <div key='about' class={`content-container ${className ? className : ''}`} {...props} >
    <h1>&Uuml;BER MICH</h1>
    <p>-- Skill-Diagramm f&uuml;r Web-Programme --</p>
    <p> {codeText} </p>
    <p>-- Skill-Diagramm f&uuml;r Design-Programme &amp; mehr --</p>
    <p> {designText} </p>
  </div>
);