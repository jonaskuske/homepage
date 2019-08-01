import router from '@/router'
import { Thumbnail } from '@/components'

const spin = el => {
  return Promise.resolve(
    (el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay'),
  )
}

const WelcomePage = ({ state, ...props }) => {
  const { projects, ui, i18n } = state
  const t = i18n.t.forNamespace('WelcomePage')

  const highlights = projects.projectList.filter(p => p.highlight).filter((_, index) => index < 3)

  return (
    <main key="welcome" {...props}>
      <h1>{t.inline('title')`Welcome`}</h1>
      <p>{t.inline(
        'description',
      )`I'm Jonas Kuske, designer and developer in the making. I'm studying »digital media production« at the University of Applied Sciences Bremerhaven. Due to my university course’s approach of teaching a broad spectrum of digital media, I have experience in many different areas, ranging from video production to computer animation - but my main focus clearly is web development and graphics design.`}</p>
      <h2>{t.inline('showcase')`Showcase`}</h2>
      <section class="projekt-container">
        {highlights.map(({ title, id, image, subtitle, category }) => {
          const href = `/detail?project=${id}`
          return (
            <Thumbnail
              fn={evt => spin(evt.target).then(() => router.push(href))}
              href={href}
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
        })}
      </section>
    </main>
  )
}

export default WelcomePage
