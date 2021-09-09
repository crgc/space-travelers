/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { Table, Badge} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

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
                  <tr key={mission.mission_id} className="missions">
                    <td>
                      {mission.mission_name}
                    </td>
                    <td style={{ fontSize: '8px' }}>
                      {mission.description}
                    </td>
                    <td>
                         {mission.reserved && (
                          <Badge>Active Member</Badge>
                      )} 
                      {!mission.reserved && (
                      <Badge bg="secondary">Not A Member</Badge>
                      )}
                    </td>
                    <td>
                    {mission.reserved && (
                      <Button variant="danger" onClick={() => leaveMission(mission.mission_id)}>Leave Mission</Button>
                      )}
                    {!mission.reserved && (
                        <Button variant="secondary"  onClick={() => joinMission(mission.mission_id)}>Join Mission</Button>
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
