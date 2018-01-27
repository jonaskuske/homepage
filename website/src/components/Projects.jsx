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
      <div class='projekt-container'>
        {werke.map(({ title, id, image }) => (
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