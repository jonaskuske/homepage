import router from '@/router';
import actions from '@/main';
import Thumbnail from './Thumbnail';

const loadThenNavigate = (id, el) => {
  actions.setProject({ image: '', title: '', text: '' });
  el = el.tagName === 'DIV' ? el : el.parentNode;
  el.classList.add('spinner-overlay');
  setTimeout(() => { router.push(`/detail?id=${id}`); el.classList.remove('spinner-overlay'); }, 1000);
};

const view = ({ projects, color, class: className = '', ...props }) => {
  console.log(color);
  let werke = [];
  for (let werk in projects) werke.push(projects[werk]);
  return (
    <div key='projects' class={className} {...props}>
      <h1>PROJEKTE</h1>
      <p> Neben den hier vorgestellten Arbeiten ist natürlich auch die Portfolio-Seite, die Sie gerade betrachten, eines meiner Projekte. Geschrieben ist sie mit Hilfe des JavaScript Frameworks »hyperapp«, einem minimalistischen Framework, das in seiner Funktionsweise React &auml;hnelt. Außerdem wurde sie unter Zuhilfenahme modernster Browser-Technologien wie CSS Variablen oder CSS Grid gebaut. Der Quellcode ist <a href='https://github.com/jonaskuske/'>hier</a> zu sehen. <br />Viel Spaß beim Erkunden! </p>
      <br />
      <div class='projekt-container'>
        {werke.reverse().map(({ title, id, image }) => (
          <Thumbnail
            onclick={evt => { loadThenNavigate(id, evt.target); }}
            href={`/detail?id=${id}`}
            image={image}
            color={color}
            id={id}
          >
            {title}
          </Thumbnail>
        ))}
      </div>
    </div>
  );
};

export default view;
