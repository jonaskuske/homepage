const style = {
  margin: '0 3rem 3rem 50%',
  transform: 'translateX(-50%)',
  width: '50%'
};

const img = {
  background: 'rgba(240, 240, 240, 0.902) center / cover no-repeat',
  width: '400%',
  marginRight: '2rem',
  height: '300px'
};

const view = ({ state, ...rest }) => {
  const { title, image, text } = state.projekt;
  return (
    <div style={style}>
      <h1>{title || 'EIN PROJEKT'}</h1>
      <div class='detail-container'>
        <div style={{ ...img, backgroundImage: image }} /> <p>'lala'</p>
      </div>
    </div>
  );
};

export default view;