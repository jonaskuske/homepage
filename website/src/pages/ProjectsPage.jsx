import router from '@/router'
import { Thumbnail } from '@/components'

const spin = el => {
  return Promise.resolve(
    (el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay'),
  )
}

const view = ({ state, ...props }) => {
  const { projects, ui, i18n } = state
  const t = i18n.t.forNamespace('ProjectsPage')

  const Thumbnails = projects.projectList.map(({ title, subtitle, id, category, image }) => {
    const link = `/detail?project=${id}`
    return (
      <Thumbnail
        fn={evt => spin(evt.target).then(() => router.push(link))}
        href={link}
        mobile={ui.useMobileLayout}
        image={image}
        color={ui.safeThemeColor}
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
      <h1>{t.inline('title')`Projects`}</h1>
      <p>
        {t.inline(
          'descriptionStart',
        )`Next to the works displayed below, the portfolio site you're looking at is one of my projects as well. It is written in JSX and rendered by the JavaScript framework »hyperapp«, a minimalistic framework that works similar to React. Additionally, the site is built using state-of-the-art web technologies like CSS variables, code splitting and CSS grid. The source code can be found `}
        <a href="http://github.com/jonaskuske/homepage" target="_blank" rel="noopener">
          {t.inline('descriptionLink')`here`}
        </a>
        {t.inline('descriptionEnd')`.<br>Have fun discovering my projects!`}
      </p>
      <br />
      <section class="projekt-container">{Thumbnails}</section>
    </main>
  )
}

export default view
