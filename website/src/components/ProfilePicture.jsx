import profilePicImage from '@img/profilepic.jpg'

const ProfilePicture = ({ ...props }) => (
  <div class="profile-pic" style={{ backgroundImage: `url(${profilePicImage})` }} {...props} />
)

export default ProfilePicture
