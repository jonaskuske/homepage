import actions from '@/main';
import router from '@/router';
import { Thumbnail } from '@/components';

const spin = el => new Promise(r => r((el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay')));

const view = ({ class: className = '', data: { projects, safeThemeColor, mobile, locales: { Splash } }, ...props }) => {
  return (
    <main key='welcome' class={`${className}`} {...props} >
      <h1>{Splash.h1}</h1>
      <p> {Splash.text} </p>
      <h2> {Splash.h2} </h2>
      <section class='projekt-container'>
        {projects.filter(el => el.highlight).map(({ title, id, image, subtitle, category }, index) => {
          const link = `/detail?project=${id}`;
          return index < 3 && (
            <Thumbnail
              onclick={evt => spin(evt.target).then(() => router.push(link))}
              href={link}
              mobile={mobile}
              image={image}
              color={safeThemeColor}
              id={id}
            >
              <p>
                {subtitle}
                <br />
                {title}
                <br />
                <br />
                <span>{category}</span>
              </p>
            </Thumbnail>
          );
        })}
      </section>
    </main>
  );
};

export default view;
