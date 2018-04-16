import { parseText } from '@/lib/helpers';

const view = ({ class: className = '', data: { locales: { Imprint } }, ...props }) => (
  <main key='imprint' class={`impressum ${className}`} {...props}>
    <h1>{Imprint.h1}</h1>
    <section>
      <h2>{Imprint.law}</h2>
      <p>Jonas Kuske</p>
      <p>Sielstraße 5</p>
      <p>27568 Bremerhaven</p>
      <br />
      <h2>{Imprint.details.title}</h2>
      <p>{Imprint.details.phone}</p>
      <p>Mail: <a href="mailto:mail@jonaskuske.com">mail@jonaskuske.com</a></p>
      <br />
      <h2>{Imprint.responsibility}</h2>
      <p>Jonas Kuske, Sielstraße 5 27568 Bremerhaven</p>
      <br />
      <h2>{Imprint.h2}</h2>
      <h3>{Imprint.contents.title}</h3>
      <p>{Imprint.contents.text}</p>
      <br />
      <h3>{Imprint.links.title}</h3>
      <p>{Imprint.links.text}</p>
      <br />
      <h3>{Imprint.copyright.title}</h3>
      <p>{parseText(Imprint.copyright.usageNotice)}</p>
      <p>{Imprint.copyright.text}</p>
    </section>
  </main>
);

export default view;