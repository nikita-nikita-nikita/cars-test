import { useQuery } from "react-query";
import { getAllCars, getCarsByType } from "services/cars";
import { Car } from "components/Car";

const loadCars = async (type) => {
  if (type) {
    const data = await getCarsByType(type);
    if (data) return data;
  }
  return getAllCars();
};

export const CarsList = ({ type }) => {
  const { data, isFetched, isLoading, isError } = useQuery(["cars", type], () =>
    loadCars(type)
  );
  if (isError) return <>Error on fetch</>;
  if (isLoading) return <>Loading...</>;
  return (
    <>{isFetched && data.map((car) => <Car key={car.name} car={car} />)}</>
  );
};
