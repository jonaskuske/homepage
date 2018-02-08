const view = ({ class: className = '', data: { locales: { Imprint } }, ...props }) => (
  <main key='imprint' class={`impressum ${className}`} {...props}>
    <h1>{Imprint.h1}</h1>
    <section>
      <h2>{Imprint.law}</h2>
      <p>Jonas Kuske</p>
      <p>An der Allee 36</p>
      <p>27568 Bremerhaven</p>
      <br /><br />
      <h2>{Imprint.details.title}</h2>
      <p>{Imprint.details.phone}</p>
      <p>Mail: <a href="mailto:joku49@gmail.com">joku49@gmail.com</a></p>
      <br />
      <h2>{Imprint.responsibility}</h2>
      <p>Jonas Kuske, An der Allee 36 27568 Bremerhaven</p>
      <br />
      <h2>{Imprint.h2}</h2>
      <h3>{Imprint.contents.title}</h3>
      <p>{Imprint.contents.text}</p>
      <br />
      <h3>{Imprint.links.title}</h3>
      <p>{Imprint.links.text}</p>
      <br />
      <h3>{Imprint.copyright.title}</h3>
      <p>{Imprint.copyright.text}</p>
    </section>
  </main>
);

export default view;