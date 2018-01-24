import txt from '@/assets/text/welcome.txt';

const style = {
  margin: '0 3rem 3rem 50%',
  transform: 'translateX(-50%)',
  width: '50%'
};

const img = {
  background: 'url(http://100wordsfilmfestival.com/wp-content/uploads/2014/10/box-bg-img.jpg) center / cover no-repeat',
  width: '10rem',
  height: '10rem'
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