import PropTypes from 'prop-types';
import React from 'react';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import style from './MissionsDisplay.module.css';

const Mission = (props) => {
  const { mission, joinMission, leaveMission } = props;

  return (
    <tr key={mission.mission_id} className="mission">
      <td style={{ fontSize: '1rem', fontWeight: '700' }}>
        {mission.mission_name}
      </td>
      <td style={{ fontSize: '0.8rem', textAlign: 'justify' }}>
        {mission.description}
      </td>
      <td>
        {mission.reserved && (
        <Badge className="active-member">Active Member</Badge>
        )}
        {!mission.reserved && (
        <Badge className={style.Badge2}>Not A Member</Badge>
        )}
      </td>
      <td>
        {mission.reserved && (
        <Button className="mission-btn" variant="outline-danger" onClick={() => leaveMission(mission.mission_id)}>Leave Mission</Button>
        )}
        {!mission.reserved && (
        <Button className="mission-btn" variant="outline-secondary" onClick={() => joinMission(mission.mission_id)}>Join Mission</Button>
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
