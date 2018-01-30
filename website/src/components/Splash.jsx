import welcome from '@/assets/text/welcome.txt';
import Thumbnail from '@@/Thumbnail';
import actions from '@/main';
import router from '@/router';

const view = ({ class: className = '', data: { projects, color, mobile }, ...props }) => {
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
            onclick={evt => actions.loadProject({ id, el: evt.target })
              .then(() => router.push(`/detail?id=${id}`))}
            href={`/detail?id=${id}`}
            color={color}
            mobile={mobile}
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
