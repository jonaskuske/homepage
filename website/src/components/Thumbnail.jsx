import Spinner from '@@/LoadingSpinner';

export default ({ img, class: className, href = '#', loading, color, ...props }, child) => (
  <a href={href} onclick={() => false}>
    <div class={'thumbnail ' + (className || '')} {...props}>
      <div style={{ paddingTop: '100%' }} />
      <div class='overlay'>
        {loading
          ? < Spinner style={{ width: '50%', height: '50%' }} color={color} />
          : <p> {child || 'Projekt'}</p>}
      </div>
    </div>
  </a>
);