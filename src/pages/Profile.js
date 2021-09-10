import { useSelector } from 'react-redux';
import MyItems from '../components/profile/MyItems';

  const storeMissions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer);

  const missionsReverved = storeMissions.filter(((mission) => mission.reserved))
    .map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
    }));

export default Profile;
