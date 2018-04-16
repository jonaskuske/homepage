import profilePicImage from '@img/profilepic.jpg';

const view = ({ ...props }) => (
  <div class='profile-pic' style={{ backgroundImage: `url(${profilePicImage})` }} {...props} />
);

export default view;
