import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../components/rockets/Rocket';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rockets = useSelector((state) => state.rocketsReducer.rockets);

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
          />
        ))
      }
    </div>
  );
};

export default Rockets;
