import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, join, leave } from '../redux/missions/missionsActions';
import MissionsTable from '../components/missions/MissionsDisplay';

const Missions = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const joinMission = (id) => {
    dispatch(join(id));
  };

  const leaveMission = (id) => {
    dispatch(leave(id));
  };
  const missionsList = store.missionsReducer;

  return (
    <div>
      <h1>Missions</h1>
      <MissionsTable
        missions={missionsList}
        joinMission={joinMission}
        leaveMission={leaveMission}
      />
    </div>
  );
};

export default Missions;
