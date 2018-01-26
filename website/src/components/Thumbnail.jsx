export default ({ img, class: className, href = '#', ...props }, child) => {
  return (
    <a href={href} onclick={() => false}>
      <div class={'thumbnail ' + (className || '')} {...props}>
        <div style={{ paddingTop: '100%' }} />
        <div class='overlay'>
          <p> {child || 'Projekt'}</p>
        </div>
      </div>
    </a>
  );
};