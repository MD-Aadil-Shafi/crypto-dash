import ProfileComponent from "../components/profile/ProfileComponent"

const Profile = () => {
  return (
    <ProfileComponent
    name="John Doe"
    username="johndoe"
    balance={15000}
    profitLoss={1200}
    />
  )
}

export default Profile