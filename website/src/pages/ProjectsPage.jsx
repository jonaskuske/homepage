import router from '@/router'
import actions from '@/main'
import { Thumbnail } from '@/components'

const spin = el => {
  return Promise.resolve(
    (el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay'),
  )
}

const view = ({ data, ...props }) => {
  const { projects, safeThemeColor, mobile, locales } = data
  const translations = locales.Projects || {}

  const Thumbnails = projects.map(({ title, subtitle, id, category, image }) => {
    const link = `/detail?project=${id}`
    return (
      <Thumbnail
        fn={evt => spin(evt.target).then(() => router.push(link))}
        href={link}
        mobile={mobile}
        image={image}
        color={safeThemeColor}
        id={id}
      >
        <p>
          {subtitle}
          <br />
          {title}
          <br />
          <br />
          <span>{category}</span>
        </p>
      </Thumbnail>
    )
  })

  return (
    <main key="projects" {...props}>
      <h1>{translations.h1}</h1>
      <p>
        {translations.text[1]}
        <a href="http://github.com/jonaskuske/homepage" target="_blank" rel="noopener">
          {translations.text.link}
        </a>
        {translations.text[1.1] || ''}
        <br />
        {translations.text[2]}
      </p>
      <br />
      <section class="projekt-container">{Thumbnails}</section>
    </main>
  )
}

export default view
