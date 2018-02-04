import router from '@/router';
import Button from '@@/Button';
import { errorMessage } from '@/lib/helpers';
import Thumbnail from '@@/Thumbnail';
import errorImage from '@img/error.jpeg';

const view = ({ class: className = '', data: { color, mobile }, ...props }) => (
  <div key='404' class={`${className}`} {...props} >
    <h1> {errorMessage ? 'Fehler' : 404} </h1>
    {errorMessage
      ? <p>{errorMessage.message ? errorMessage.message : 'Die Seite konnte nicht geladen werden, bitte versuche es später erneut.'}</p>
      : <p>Die aufgerufene Seite » {window.location.pathname.substring(1)} « existiert leider nicht. :(</p>}
    <div style={{ width: '70%', maxWidth: '50vh', margin: '0 auto 0 0' }}>
      <Button onclick={() => router.push('/')} > Zur Startseite </Button>
      <Thumbnail image={errorImage} color={color} mobile={mobile} href='/' onclick={() => router.push('/')}> Zur Startseite </Thumbnail>
    </div>
  </div>
);

export default view;