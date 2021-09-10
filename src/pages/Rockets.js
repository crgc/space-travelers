import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../components/rockets/Rocket';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div className="rockets-container mt-4">
      {
        rockets.map((rocket) => (
          <Rocket
            id={rocket.id}
            key={rocket.id}
            name={rocket.name}
            imageUrl={rocket.image_url}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </div>
  );
};

export default Rockets;
