import { useSelector } from 'react-redux';
import MyItems from '../components/profile/MyItems';

const Profile = () => {
  const storeMissions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer);

  const missionsReverved = storeMissions.filter(((mission) => mission.reserved))
    .map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
    }));

  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="d-flex flex-row justify-content-around mt-3 profile-container">
      <MyItems title="My Missions" items={missionsReverved} />
      <MyItems title="My Rockets" items={rocketsReserved} />
    </div>
  );
};

export default Profile;
