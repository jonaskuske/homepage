import profilePic from '@img/Lisbon.jpg';

const view = ({ ...props }) => (
  <div class='profile-pic' style={{ backgroundImage: `url(${profilePic})` }} {...props} />
);

export default view;
