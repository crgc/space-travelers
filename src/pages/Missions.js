import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsActions';
import MissionsDisplay from '../components/missions/MissionsDisplay';

const Missions = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  const missionsList = store.missionsReducer;

  return (
    <div>
      <h1>Missions</h1>
      <MissionsDisplay missions={missionsList} />
    </div>
  );
};

export default Missions;
