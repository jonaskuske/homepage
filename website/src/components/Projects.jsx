import router from '@/router';
import actions from '@/main';
import Thumbnail from './Thumbnail';

const loadThenNavigate = (id, el) => {
  el = el.tagName === 'DIV' ? el : el.parentNode;
  el.classList.add('spinner-overlay');
  setTimeout(() => { actions.setProject({ image: '', title: '', text: '' }); router.push(`/detail?id=${id}`); el.classList.remove('spinner-overlay'); }, 1000);
};

export default ({ state: { projekte, projectLoading, themeColor, page }, ...props }) => {
  let werke = [];
  for (let werk in projekte) werke.push(projekte[werk]);
  return (
    <div data-page={page} key='projects' class='content-container' {...props}>
      <h1>PROJEKTE</h1>
      <p> Neben den hier vorgestellten Arbeiten ist natürlich auch die Portfolio-Seite, die Sie gerade betrachten, eines meiner Projekte. Geschrieben ist sie mit Hilfe des JavaScript Frameworks »hyperapp«, einem minimalistischen Framework, das in seiner Funktionsweise React &auml;hnelt. Außerdem wurde sie unter Zuhilfenahme modernster Browser-Technologien wie CSS Variablen oder CSS Grid gebaut. Der Quellcode ist <a href='https://github.com/jonaskuske/'>hier</a> zu sehen. <br />Jetzt aber viel Spaß beim Erkunden! </p>
      <br />
      <div class='projekt-container'>
        {werke.reverse().map(({ title, id, image }) => (
          <Thumbnail
            style={{ backgroundImage: `url(${image})` }}
            onclick={evt => { loadThenNavigate(id, evt.target); }}
            href={`/detail?id=${id}`}
            color={themeColor}
            id={id}
          >
            {title}
          </Thumbnail>
        ))}
      </div>
    </div>
  );
};