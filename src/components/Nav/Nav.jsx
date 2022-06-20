import NavComponent from "react-bootstrap/Nav";
import { CARS_ENUM } from "../../services/carsData";

export const Nav = ({ selectType, selectedType }) => {
  return (
    <NavComponent
      onSelect={selectType}
      activeKey={selectedType}
      variant="tabs"
      className="justify-content-around"
    >
      <NavComponent.Item>
        <NavComponent.Link eventKey={CARS_ENUM.SPORT}>
          {CARS_ENUM.SPORT}
        </NavComponent.Link>
      </NavComponent.Item>
      <NavComponent.Item>
        <NavComponent.Link eventKey={CARS_ENUM.TWO_WHEELS}>
          {CARS_ENUM.TWO_WHEELS}
        </NavComponent.Link>
      </NavComponent.Item>
      <NavComponent.Item>
        <NavComponent.Link eventKey={CARS_ENUM.ELECTRIC}>
          {CARS_ENUM.ELECTRIC}
        </NavComponent.Link>
      </NavComponent.Item>
    </NavComponent>
  );
};
