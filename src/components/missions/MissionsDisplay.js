import PropTypes from 'prop-types';

const MissionsTable = (props) => {
  const { missions } = props;
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
                      <button type="button">Not a Member</button>
                      <button type="button">Join Mission</button>
                    </div>
                  </div>
                ))
            }
    </div>
  );
};

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MissionsTable;
