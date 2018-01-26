import router from '@/router';
import Button from '@@/Button';

const style = {
  margin: '0 3rem 3rem 50%',
  transform: 'translateX(-50%)',
  width: '50%'
};

export default () => (
  <div style={style}>
    <h1> 404 </h1>
    <p>Die aufgerufene Seite » {window.location.pathname} « existiert leider nicht. :(</p>
    <Button onclick={() => router.push('/')} style={{ padding: 0 }}> Zur Startseite </Button>
  </div>
);