import PropTypes from 'prop-types';

const MissionsDisplay = (props) => {
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
                  </div>
                ))
            }
    </div>
  );
};

MissionsDisplay.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MissionsDisplay;
