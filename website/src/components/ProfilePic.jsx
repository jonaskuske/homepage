import profilePic from '@img/Lisbon.jpg';

const style = {
  background: `url(${profilePic}) center / cover no-repeat`
};

export default ({ style: inheritedStyle, ...props }) => (
  <div class='profile-pic' style={{ ...style, ...inheritedStyle }} {...props} />
);