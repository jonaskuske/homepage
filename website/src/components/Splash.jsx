import welcome from '@/assets/text/welcome.txt';
import Thumbnail from '@@/Thumbnail';
import actions from '@/main';
import router from '@/router';

const loadThenNavigate = (id, el) => {
  actions.setProject({ image: '', title: '', text: '' });
  el = el.tagName === 'DIV' ? el : el.parentNode;
  el.classList.add('spinner-overlay');
  setTimeout(() => { router.push(`/detail?id=${id}`); el.classList.remove('spinner-overlay'); }, 1000);
};

const view = ({ class: className = '', projects, themeColor, ...props }) => {
  let werke = [];
  for (let werk in projects) werke.push(projects[werk]);
  return (
    <div key='welcome' class={`${className}`} {...props} >
      <h1 class='kern'>WILLKOMMEN</h1>
      <p> {welcome} </p>
      <h2> Letzte <span class='pointer' onclick={() => router.push('/projekte')}>Projekte</span> </h2>
      <div class='projekt-container'>
        {werke.reverse().map(({ title, id, image }, index) => index < 3 && (
          <Thumbnail
            image={image}
            onclick={evt => loadThenNavigate(id, evt.target)}
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

export default view;
