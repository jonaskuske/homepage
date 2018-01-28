import router from '@/router';
import actions from '@/main';
import Thumbnail from './Thumbnail';

const loadThenNavigate = id => {
  actions.startLoading();
  setTimeout(() => { router.push(`/detail?id=${id}`); actions.stopLoading(); }, 1000);
};

export default ({ state: { projekte, projectLoading, themeColor }, ...props }) => {
  let werke = [];
  for (let werk in projekte) werke.push(projekte[werk]);
  return (
    <div key='projects' class='content-container' {...props}>
      <h1>PROJEKTE</h1>
      <p> Neben den hier vorgestellten Arbeiten ist natürlich auch die Portfolio-Seite, die Sie gerade betrachten, eines meiner Projekte. Geschrieben ist sie mit Hilfe des JavaScript Frameworks »hyperapp«, einem minimalistischen Framework, das in seiner Funktionsweise React &auml;hnelt. Außerdem wurde sie unter Zuhilfenahme modernster Browser-Technologien wie CSS Variablen oder CSS Grid gebaut. Der Quellcode ist <a href='https://github.com/jonaskuske/'>hier</a> zu sehen. <br />Jetzt aber viel Spaß beim Erkunden! </p>
      <br />
      <div class='projekt-container'>
        {werke.reverse().map(({ title, id, image }) => (
          <Thumbnail
            style={{ backgroundImage: `url(${image})` }}
            onclick={() => loadThenNavigate(id)}
            href={`/detail?id=${id}`}
            loading={projectLoading}
            color={themeColor}
          >
            {title}
          </Thumbnail>
        ))}
      </div>
    </div>
  );
};