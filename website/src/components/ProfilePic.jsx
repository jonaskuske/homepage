import profilePic from '@img/Lisbon.jpg';

const style = {
  background: `url(${profilePic}) center / cover no-repeat`,
  position: 'relative'
};

export default ({ ...props }) => (
  <div class='profile-pic' style={style} {...props}>
    <div class='profile-pic-animation' />
  </div>
);