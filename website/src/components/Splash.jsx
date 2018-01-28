import welcome from '@/assets/text/welcome.txt';
import Thumbnail from '@@/Thumbnail';
import actions from '@/main';
import router from '@/router';

const loadThenNavigate = id => {
  actions.startLoading();
  setTimeout(() => { router.push(`/detail?id=${id}`); actions.stopLoading(); }, 1000);
};

export default ({ class: className, state: { projekte, projectLoading, themeColor }, ...props }) => {
  let werke = [];
  for (let werk in projekte) werke.push(projekte[werk]);
  return (
    <div class={`content-container ${className ? className : ''}`} {...props} >
      <h1>WILLKOMMEN</h1>
      <p> {welcome} </p>
      <h2 style={{ marginTop: '2rem' }}> Letzte <span class='pointer' onclick={() => router.push('/projekte')}>Projekte:</span> </h2>
      <div class='projekt-container'>
        {werke.reverse().map(({ title, id, image }, index) => index < 3 && (
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