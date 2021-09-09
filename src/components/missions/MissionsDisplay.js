/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { Table, Badge} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import style from './MissionsDisplay.module.css';

const MissionsTable = (props) => {
  const { missions, joinMission, leaveMission } = props;

  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
      </thead>
        <tbody>
        {
                missions.map((mission) => (
                  <tr key={mission.mission_id} className="mission">
                    <td style={{fontSize: '12px', fontWeight: '700'}}>
                      {mission.mission_name}
                    </td>
                    <td style={{ fontSize: '10px',textAlign: 'justify' }}>
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
                        <Button variant="outline-secondary"  onClick={() => joinMission(mission.mission_id)}>Join Mission</Button>
                      )}
                    </td>
                  </tr>
                ))
            }
       </tbody>
    </Table>
  );
};

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.object).isRequired,
  leaveMission: PropTypes.func.isRequired,
  joinMission: PropTypes.func.isRequired,
};

export default MissionsTable;
