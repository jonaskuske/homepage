import txt from '@/assets/text/projekt.txt';

const style = {
  margin: '0 3rem 3rem 50%',
  transform: 'translateX(-50%)',
  width: '50%'
};

const img = {
  background: 'url(http://ku.edu.np/kucc/wp-content/uploads/2017/10/design.png) center / cover no-repeat',
  backgroundColor: 'rgba(240, 240, 240, 0.902)',
  width: '400%',
  marginRight: '2rem',
  height: '300px'
};

const view = ({ title, ...rest }) => {
  return (
    <div style={style}>
      <h1>{title || 'EIN PROJEKT'}</h1>
      <div class='detail-container'>
        <div style={img} /><p>{txt}</p>
      </div>
    </div>
  );
};

export default view;