import router from '@/router';
import actions from '@/main';
import Thumbnail from './Thumbnail';

const spin = el => new Promise(r => r((el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay')));
const innerHTML = (el, text) => el.innerHTML = text;

const view = ({ data: { projects, color, mobile, locales: { Projects } }, class: className = '', ...props }) => {
  let werke = [];
  for (let werk in projects) werke.push(projects[werk]);
  return (
    <main key='projects' class={className} {...props}>
      <h1>{Projects.h1}</h1>
      <p>
        {Projects.text[1]}
        <a href="http://github.com/jonaskuske/portfolio" target="_blank" rel="noopener">{Projects.text.link}</a>
        {Projects.text[1.1] || ''}
        <br />{Projects.text[2]}</p>
      <br />
      <section class='projekt-container'>
        {werke.reverse().map(({ title, subtitle, id, category, image }) => {
          const link = `/detail?project=${id}`;
          return (
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
