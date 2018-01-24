export default (props, child) => {
  const { img, class: className, ...rest } = props;
  return (
    <div class={'thumbnail ' + (className || '')} {...rest}>
      <div style={{ paddingTop: '100%' }} />
      <div class='overlay'>
        <p> {child || 'Projekt'}</p>
      </div>
    </div>
  );
};