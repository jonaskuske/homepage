import profilePic from '@img/Lisbon.jpg';

const view = ({ ...props }) => (
  <div class='profile-pic' style={{ backgroundImage: `url(${profilePic})` }} {...props}>
    <div class='profile-pic-animation' />
  </div>
);

export default view;
