import router from '@/router';
import Thumbnail from './Thumbnail';

export default ({ state: { projekte, projectLoading } }) => {
  let werke = [];
  for (let werk in projekte) werke.push(projekte[werk]);
  return (
    <div class='content-container'>
      <h1>PROJEKTE</h1>
      <div class='projekt-container'>
        {werke.map(({ title, id, image }) => (
          <Thumbnail
            style={{ backgroundImage: `url(${image})` }}
            onclick={() => router.push(`/detail?id=${id}`)}
            href={`/detail?id=${id}`}
            loading={projectLoading}
          >
            {title}
          </Thumbnail>
        ))}
      </div>
    </div>
  );
};