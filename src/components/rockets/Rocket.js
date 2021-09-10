import { Button, Badge } from 'react-bootstrap';

const Rocket = (props) => {
  const { name, description, imageUrl } = props; /* eslint-disable-line react/prop-types */

  return (
    <article className="d-flex flex-row mb-4">
      <img className="rocket-img mx-3" src={imageUrl} alt="" />
      <div className="rocket-info">
        <h3 className="rocket-name">{ name }</h3>
        <p>
          <Badge className="rocket-reserved">Reserved</Badge>
          { description }
        </p>
        <Button>Reserve Rocket</Button>
      </div>
    </article>
  );
};

export default Rocket;
