export default ({ img, class: className, ...props }, child) => {
  return (
    <div class={'thumbnail ' + (className || '')} {...props}>
      <div style={{ paddingTop: '100%' }} />
      <div class='overlay'>
        <p> {child || 'Projekt'}</p>
      </div>
    </div>
  );
};