import MyItems from "../components/profile/MyItems";

const Profile = () => {
  

  return (
    <div className="d-flex flex-row justify-content-around mt-3 profile-container">
      <MyItems title="My Missions" items={['Telstar', 'AsiaSat', 'SES']} />
      <MyItems title="My Rockets" items={['Falcon 1', 'Falcon 9']} />
    </div>
  );
};

export default Profile;
