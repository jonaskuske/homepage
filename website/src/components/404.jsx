import router from '@/router';
import Button from '@@/Button';

const view = ({ class: className = '', data, ...props }) => (
  <div key='404' class={`${className}`} {...props} >
    <h1> 404 </h1>
    <p>Die aufgerufene Seite » {window.location.pathname.substring(1)} « existiert leider nicht. :(</p>
    <Button onclick={() => router.push('/')} > Zur Startseite </Button>
  </div>
);

export default view;