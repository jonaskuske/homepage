import welcome from '@/assets/text/welcome.txt';
import Thumbnail from '@@/Thumbnail';
import actions from '@/main';
import router from '@/router';

const spin = el => new Promise(r => r((el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay')));

const view = ({ class: className = '', data: { projects, color, mobile }, ...props }) => {
  let werke = [];
  for (let werk in projects) werke.push(projects[werk]);
  return (
    <main key='welcome' class={`${className}`} {...props} >
      <h1>WILLKOMMEN</h1>
      <p> {welcome} </p>
      <h2> Highlights </h2>
      <section class='projekt-container'>
        {werke.filter(el => el.highlight).map(({ title, id, image, subtitle, category }, index) => {
          const link = `/detail?project=${id}`;
          return index < 3 && (
            <Thumbnail
              onclick={evt => spin(evt.target).then(() => router.push(link))}
              href={link}
              mobile={mobile}
              image={image}
              color={color}
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
