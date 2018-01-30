import router from '@/router';
import Button from '@@/Button';

const view = ({ class: className = '', state: { page }, ...props }) => (
  <div key='404' data-page={page} class={`${className}`} {...props} >
    <h1> 404 </h1>
    <p>Die aufgerufene Seite » {window.location.pathname.substring(1)} « existiert leider nicht. :(</p>
    <Button onclick={() => router.push('/')} style={{ padding: 0 }}> Zur Startseite </Button>
  </div>
);

export default view;