import router from '@/router'
import { Button, Thumbnail } from '@/components'
import { errorMessages } from '@/lib/helpers'
import errorImage from '@img/error.jpeg'

const ErrorPage = ({ data, ...props }) => {
  const { safeThemeColor, mobile, locales } = data
  const translations = locales.Error || {}

  const error = errorMessages[errorMessages.length - 1]

  const ErrorMessage = error && [<h1>Error</h1>, <p>{error.toString()}</p>]
  const NotFoundError = !error && [
    <h1>404</h1>,
    <p>{translations.notFound1 + location.pathname.substring(1) + translations.notFound2}</p>,
  ]

  return (
    <main key="404" {...props}>
      <section>{error ? ErrorMessage : NotFoundError}</section>

      <section class="error-section">
        <Button onclick={() => router.push('/')}> {translations.toStart} </Button>
        <Thumbnail
          image={errorImage}
          color={safeThemeColor}
          mobile={mobile}
          href="/"
          fn={() => router.push('/')}
        >
          <p>{translations.toStart}</p>
        </Thumbnail>
      </section>
    </main>
  )
}

export default ErrorPage
