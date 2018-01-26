import router from '@/router';
import Thumbnail from './Thumbnail';

const style = {
  margin: '0 3rem 3rem 50%',
  transform: 'translateX(-50%)',
  width: '50%'
};

const projects = new Array(11).fill('Ein Projekt');

export default props => (
  <div style={style}>
    <h1>PROJEKTE</h1>
    <div class='projekt-container'>
      {projects.map(el => <Thumbnail onclick={() => router.push('/detail')}> {el} </Thumbnail>)}
    </div>
  </div>
);