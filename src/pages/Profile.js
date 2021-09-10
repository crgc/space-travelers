import { useSelector } from 'react-redux';
import MyItems from '../components/profile/MyItems';

  const storeMissions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer);
    <MyItems title="My Missions" items={[{ id: 1, name: 'Telstar' }]} />
    <MyItems title="My Rockets" items={[{ id: 1, name: 'Falcon 1' }]} />
  </div>
);

export default Profile;
