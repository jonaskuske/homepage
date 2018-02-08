import router from '@/router';
import actions from '@/main';
import Thumbnail from './Thumbnail';

const spin = el => new Promise(r => r((el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay')));

const view = ({ data: { projects, color, mobile }, class: className = '', ...props }) => {
  let werke = [];
  for (let werk in projects) werke.push(projects[werk]);
  return (
    <main key='projects' class={className} {...props}>
      <h1>PROJEKTE</h1>
      <p> Neben den hier vorgestellten Arbeiten ist natürlich auch die Portfolio-Seite, die Sie gerade betrachten, eines meiner Projekte. Geschrieben ist sie mit Hilfe des JavaScript Frameworks »hyperapp«, einem minimalistischen Framework, das in seiner Funktionsweise React &auml;hnelt. Außerdem wurde sie unter Zuhilfenahme modernster Browser-Technologien wie CSS Variablen oder CSS Grid gebaut. Der Quellcode ist <a href='https://github.com/jonaskuske/'>hier</a> zu sehen. <br />Viel Spaß beim Erkunden! </p>
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
