import { ListGroup } from "react-bootstrap";

const MyItems = (props) => {
  const { title, items } = props;

  return (
    <div className="list-group-container">
      <h3>{title}</h3>
      <ListGroup className="mt-3">
        {
          items.map((item) => (
            <ListGroup.Item className="p-1rem">{item}</ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  );
};

export default MyItems;
