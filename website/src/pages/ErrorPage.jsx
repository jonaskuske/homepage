import router from '@/router'
import { Button, Thumbnail } from '@/components'
import { errorMessages } from '@/lib/helpers'
import errorImage from '@/assets/images/error.jpeg'

const ErrorPage = ({ state: { ui, i18n }, ...props }) => {
  const t = i18n.t.forNamespace('ErrorPage')

  const error = errorMessages[errorMessages.length - 1]

  const getErrorMessage = message => [<h1>Error</h1>, <p>{message}</p>]
  const getNotFoundError = () => {
    const page = location.pathname.substring(1)
    return [
      <h1>404</h1>,
      <p>{t.inline(
        'notFound',
      )`Unfortunately, the requested page » ${page} « does not exist on this site. :(`}</p>,
    ]
  }

  return (
    <main key="404" {...props}>
      <section>{error ? getErrorMessage(error.message) : getNotFoundError()}</section>

      <section class="error-section">
        <Button onclick={() => router.push('/')}>{t.inline('goBack')`Back to Start`}</Button>
        <Thumbnail
          image={errorImage}
          color={ui.safeThemeColor}
          mobile={ui.useMobileLayout}
          href="/"
          fn={() => router.push('/')}
        >
          <p>{t('goBack')}</p>
        </Thumbnail>
      </section>
    </main>
  )
}

export default ErrorPage
