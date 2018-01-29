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

export default ({ class: className, state: { projekte, projectLoading, themeColor, page }, ...props }) => {
  let werke = [];
  for (let werk in projekte) werke.push(projekte[werk]);
  return (
    <div key='welcome' data-page={page} class={`content-container ${className ? className : ''}`} {...props} >
      <h1 class='kern'>WILLKOMMEN</h1>
      <p> {welcome} </p>
      <h2 style={{ marginTop: '2rem' }}> Letzte <span class='pointer' onclick={() => router.push('/projekte')}>Projekte</span> </h2>
      <div class='projekt-container'>
        {werke.reverse().map(({ title, id, image }, index) => index < 3 && (
          <Thumbnail
            style={{ backgroundImage: `url(${image})` }}
            onclick={evt => loadThenNavigate(id, evt.target)}
            href={`/detail?id=${id}`}
            loading={projectLoading}
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