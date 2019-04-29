import { parseText } from '@/lib/helpers'

const ImprintPage = ({ data, ...props }) => {
  const { locales } = data
  const { h1: title, Imprint, Privacy } = locales.Legal || {}

  const className = 'legal ' + props.class || ''

  return (
    <main key="legal" class={className} {...props}>
      <h1>{title}</h1>
      <section>
        <h1>{Imprint.h1}</h1>
        <h2>{Imprint.law}</h2>
        <p>Jonas Kuske</p>
        <p>Sielstraße 5</p>
        <p>27568 Bremerhaven</p>
        <br />
        <h2>{Imprint.details.title}</h2>
        <p>{Imprint.details.phone}</p>
        <p>
          Mail: <a href="mailto:mail@jonaskuske.com">mail@jonaskuske.com</a>
        </p>
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
      <section>
        <h1>{Privacy.h1}</h1>
        <p>{Privacy.contactData}</p>
        <p>{Privacy.colorSync}</p>
        <p>{Privacy.end}</p>
      </section>
    </main>
  )
}

export default ImprintPage
