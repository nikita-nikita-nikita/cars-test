import NavComponent from "react-bootstrap/Nav";
import { CARS_ENUM } from "services/carsData";
import { NavLink } from "react-router-dom";
import { routing } from "pages/routing";
import { generatePath } from "react-router-dom";

export const Nav = () => {
  return (
    <NavComponent variant="tabs" className="justify-content-around">
      {Object.values(CARS_ENUM).map((type) => (
        <NavComponent.Item key={type}>
          <NavLink to={generatePath(routing.cars.url, { type })}>
            {type}
          </NavLink>
        </NavComponent.Item>
      ))}
    </NavComponent>
  );
};
