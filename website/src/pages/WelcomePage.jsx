import router from '@/router'
import { Thumbnail } from '@/components'

const spin = el => {
  return Promise.resolve(
    (el.tagName === 'DIV' ? el : el.parentNode).classList.add('spinner-overlay'),
  )
}

const WelcomePage = ({ data, ...props }) => {
  const { projects, safeThemeColor, mobile, locales } = data
  const translations = locales.Splash || {}

  return (
    <main key="welcome" {...props}>
      <h1>{translations.h1}</h1>
      <p> {translations.text} </p>
      <h2> {translations.h2} </h2>
      <section class="projekt-container">
        {projects
          .filter(el => el.highlight)
          .filter((_, index) => index < 3)
          .map(({ title, id, image, subtitle, category }, index) => {
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
          })}
      </section>
    </main>
  )
}

export default WelcomePage
