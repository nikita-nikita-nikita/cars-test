import Container from "react-bootstrap/Container";
import { CARS_ENUM } from "services/carsData";
import { generatePath, NavLink } from "react-router-dom";
import { routing } from "pages/routing";

export const Main = () => {
  return (
    <Container className="w-100 min-vh-100 d-flex justify-content-around align-items-center">
      {Object.values(CARS_ENUM).map((type) => (
        <NavLink
          to={generatePath(routing.cars.url, { type })}
          style={{
            padding: "130px 40px",
            width: "min(33%, 200px)",
            textAlign: "center",
            border: "1px solid #ececec",
          }}
        >
          {type}
        </NavLink>
      ))}
    </Container>
  );
};
