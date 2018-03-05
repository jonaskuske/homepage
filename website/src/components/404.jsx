import router from '@/router';
import Button from '@@/Button';
import { errorMessages } from '@/lib/helpers';
import Thumbnail from '@@/Thumbnail';
import errorImage from '@img/error.jpeg';

const view = ({ class: className = '', data: { themeColor, mobile }, ...props }) => {
  const errorMessage = errorMessages[errorMessages.length - 1];
  return (
    <main key='404' class={`${className}`} {...props} >
      <section>
        <h1> {errorMessage ? 'Fehler' : 404} </h1>
        {errorMessage
          ? <p>{errorMessage.toString()}</p>
          : <p>Die aufgerufene Seite » {window.location.pathname.substring(1)} « existiert leider nicht. :(</p>}
      </section>
      <section style={{ width: '70%', maxWidth: '50vh', margin: '0 auto 0 0' }}>
        <Button onclick={() => router.push('/')} > Zur Startseite </Button>
        <Thumbnail image={errorImage} color={themeColor} mobile={mobile} href='/' onclick={() => router.push('/')}>
          <p>Zur Startseite</p>
        </Thumbnail>
      </section>
    </main>
  );
};

export default view;