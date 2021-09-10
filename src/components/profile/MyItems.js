import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const MyItems = (props) => {
  const { title, items } = props; /* eslint-disable-line react/prop-types */

  return (
    <div className="list-group-container">
      <h3>{title}</h3>
      <ListGroup className="mt-3">
        {
          items.map((item) => (/* eslint-disable-line react/prop-types */
            <ListGroup.Item key={item.id} className="p-1rem">{item.name}</ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  );
};

MyItems.propsType = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default MyItems;
