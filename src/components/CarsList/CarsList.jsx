import { useQuery } from "react-query";
import { getAllCars, getCarsByType } from "services/cars";
import { Car } from "components/Car";

const loadCars = async (type, q) => {
  if (type) {
    const data = await getCarsByType(type, q);
    if (data) return data;
  }
  return getAllCars(q);
};

export const CarsList = ({ type, q }) => {
  const { data, isFetched, isLoading, isError } = useQuery(
    ["cars", type, q],
    () => loadCars(type, q)
  );
  if (isError) return <>Error on fetch</>;
  if (isLoading) return <>Loading...</>;
  return (
    <>{isFetched && data.map((car) => <Car key={car.name} car={car} />)}</>
  );
};
