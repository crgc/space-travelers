import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissions, join, leave } from '../redux/missions/missionsActions';
import Mission from '../components/missions/MissionsDisplay';

const Missions = () => {
  const store = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (store.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  const joinMission = (id) => {
    dispatch(join(id));
  };

  const leaveMission = (id) => {
    dispatch(leave(id));
  };
  const missionsList = store;

  return (
    <Table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missionsList.map((mission) => (
          <Mission
            mission={mission}
            key={mission.mission_id}
            joinMission={joinMission}
            leaveMission={leaveMission}
          />
        ))}

      </tbody>
    </Table>
  );
};

export default Missions;
