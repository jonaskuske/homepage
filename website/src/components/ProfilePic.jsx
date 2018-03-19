import profilePic from '@img/profilepic.jpg';

const view = ({ ...props }) => (
  <div class='profile-pic' style={{ backgroundImage: `url(${profilePic})` }} {...props} />
);

export default view;
