import PropTypes from 'prop-types';
import React from 'react';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import style from './MissionsDisplay.module.css';

const Mission = (props) => {
  const { mission, joinMission, leaveMission } = props;

  return (
    <tr key={mission.mission_id} className="mission">
      <td style={{ fontSize: '12px', fontWeight: '700' }}>
        {mission.mission_name}
      </td>
      <td style={{ fontSize: '10px', textAlign: 'justify' }}>
        {mission.description}
      </td>
      <td>
        {mission.reserved && (
        <Badge className={style.Badge}>Active Member</Badge>
        )}
        {!mission.reserved && (
        <Badge className={style.Badge2}>Not A Member</Badge>
        )}
      </td>
      <td>
        {mission.reserved && (
        <Button variant="outline-danger" onClick={() => leaveMission(mission.mission_id)}>Leave Mission</Button>
        )}
        {!mission.reserved && (
        <Button variant="outline-secondary" onClick={() => joinMission(mission.mission_id)}>Join Mission</Button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.arrayOf(PropTypes.object).isRequired,
  leaveMission: PropTypes.func.isRequired,
  joinMission: PropTypes.func.isRequired,
};

export default Mission;
