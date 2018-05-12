import router from '@/router';
import { errorMessages } from '@/lib/helpers';
import { Button, Thumbnail } from '@/components';
import errorImage from '@img/error.jpeg';

const view = ({ data: { safeThemeColor, mobile, locales: { Error = {} } }, ...props }) => {
  const errorMessage = errorMessages[errorMessages.length - 1];
  return (
    <main key='404' {...props} >
      <section>
        <h1> {errorMessage ? 'Error' : 404} </h1>
        {errorMessage
          ? <p>{errorMessage.toString()}</p>
          : <p>{Error.notFound1 + window.location.pathname.substring(1) + Error.notFound2}</p>}
      </section>
      <section class='error-section'>
        <Button onclick={() => router.push('/')} > {Error.toStart} </Button>
        <Thumbnail
          image={errorImage}
          color={safeThemeColor}
          mobile={mobile}
          href='/'
          fn={() => router.push('/')}
        >
          <p>{Error.toStart}</p>
        </Thumbnail>
      </section>
    </main>
  );
};

export default view;