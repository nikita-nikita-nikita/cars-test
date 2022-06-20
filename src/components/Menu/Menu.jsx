import { useState } from "react";
import { Nav } from "components/Nav";
import { CarsList } from "components/CarsList";

export const Menu = () => {
  const [selectedType, setSelectedType] = useState(null);
  const selectType = (type) =>
    setSelectedType((currentType) => (currentType === type ? null : type));
  return (
    <>
      <Nav selectType={selectType} selectedType={selectedType} />
      <CarsList type={selectedType} />
    </>
  );
};
