import Button from '@@/Button';
import actions from '@/main';
import welcome from '@/assets/text/welcome.txt';
import codeText from '@/assets/text/code.txt';
import designText from '@/assets/text/design.txt';


const style = {
  margin: '0 3rem 3rem 50%',
  transform: 'translateX(-50%)',
  width: '50%'
};

export default props => (
  <div style={style}>
    <h1>WILLKOMMEN</h1>
    <p> {welcome} </p>
    <p> {codeText} </p>
    <p> {designText} </p>
  </div>
);