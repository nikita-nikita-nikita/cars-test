import Card from "react-bootstrap/Card";

export const Car = ({ car: { type, name, parts } }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{type}</Card.Subtitle>
        <Card.Text>Parts: {parts.join(" ")}</Card.Text>
      </Card.Body>
    </Card>
  );
};
