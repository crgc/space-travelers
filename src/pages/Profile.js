import MyItems from '../components/profile/MyItems';

const Profile = () => (
  <div className="d-flex flex-row justify-content-around mt-3 profile-container">
    <MyItems title="My Missions" items={[{ id: 1, name: 'Telstar' }]} />
    <MyItems title="My Rockets" items={[{ id: 1, name: 'Falcon 1' }]} />
  </div>
);

export default Profile;
