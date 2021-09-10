import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { reserve, cancel } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, name, description, imageUrl, reserved, /* eslint-disable-line react/prop-types */
  } = props;
  const dispatch = useDispatch();

  const reserveRocket = (id) => {
    dispatch(reserve(id));
  };

  const cancelReservation = (id) => {
    dispatch(cancel(id));
  };

  return (
    <article className="d-flex flex-row mb-4">
      <img className="rocket-img mx-3" src={imageUrl} alt="" />
      <div className="rocket-info">
        <h3 className="rocket-name">{ name }</h3>
        <p>
          {reserved && (
            <Badge className="rocket-reserved">Reserved</Badge>
          )}
          { description }
        </p>
        {reserved && (
        <Button variant="light" onClick={() => cancelReservation(id)}>Cancel Reservation</Button>
        )}
        {!reserved && (
        <Button onClick={() => reserveRocket(id)}>Reserve Rocket</Button>
        )}
      </div>
    </article>
  );
};

export default Rocket;
