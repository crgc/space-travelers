import PropTypes from 'prop-types';
import React from 'react';

const MissionsTable = (props) => {
  const { missions, joinMission, leaveMission } = props;

  return (
    <div>
      {
                missions.map((mission) => (
                  <div key={mission.mission_id} className="missions">
                    <div>
                      Name:
                      {mission.mission_name}
                    </div>
                    <div style={{ fontSize: '8px' }}>
                      Discription:
                      {mission.description}
                    </div>
                    <div>
                      {mission.reserved && (
                      <button type="button" onClick={() => leaveMission(mission.mission_id)}>Leave Mission</button>
                      )}

                      {mission.reserved && (
                      <button type="button">Active Member</button>
                      )}
                      {!mission.reserved && (
                        <button type="button" onClick={() => joinMission(mission.mission_id)}>Join Mission</button>
                      )}
                    </div>
                  </div>
                ))
            }
    </div>
  );
};

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.object).isRequired,
  leaveMission: PropTypes.func.isRequired,
  joinMission: PropTypes.func.isRequired,
};

export default MissionsTable;
