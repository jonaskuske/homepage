import welcome from '@/assets/text/welcome.txt';
import Thumbnail from '@@/Thumbnail';
import actions from '@/main';
import router from '@/router';

const spin = el => new Promise(r => r((el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay')));

const view = ({ class: className = '', data: { projects, color, mobile }, ...props }) => {
  let werke = [];
  for (let werk in projects) werke.push(projects[werk]);
  return (
    <main key='welcome' class={`${className}`} {...props} >
      <h1 class='kern'>WILLKOMMEN</h1>
      <p> {welcome} </p>
      <h2> Letzte <span class='pointer' onclick={() => router.push('/projekte')}>Projekte</span> </h2>
      <section class='projekt-container'>
        {werke.reverse().map(({ title, id, image, subtitle }, index) => index < 3 && (
          <Thumbnail
            onclick={evt => spin(evt.target).then(() => router.push(`/detail?id=${id}`))}
            href={`/detail?id=${id}`}
            mobile={mobile}
            image={image}
            color={color}
            subtitle={subtitle}
            id={id}
          >
            {title}
          </Thumbnail>
        ))}
      </section>
    </main>
  );
};

export default view;
