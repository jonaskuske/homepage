import profilePic from '@img/Lisbon.jpg';

const style = {
  background: `url(${profilePic}) center / cover no-repeat`,
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  position: 'relative'
};

export default props => (
  <div style={{ ...style, ...props.style }} />
);