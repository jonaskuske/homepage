import profilePicImage from '@/assets/images/profilepic.jpg'

const ProfilePicture = ({ ...props }) => (
  <div class="profile-pic" style={{ backgroundImage: `url(${profilePicImage})` }} {...props} />
)

export default ProfilePicture
