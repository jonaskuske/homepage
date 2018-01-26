import router from '@/router';
import Button from '@@/Button';

export default () => (
  <div class='content-container'>
    <h1> 404 </h1>
    <p>Die aufgerufene Seite » {window.location.pathname.substring(1)} « existiert leider nicht. :(</p>
    <Button onclick={() => router.push('/')} style={{ padding: 0 }}> Zur Startseite </Button>
  </div>
);