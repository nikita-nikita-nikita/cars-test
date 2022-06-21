import { cars } from "./carsData";

export const getAllCars = (q = "") =>
  Promise.resolve(
    cars.filter(({ name }) => name.toLowerCase().includes(q.toLowerCase()))
  );

export const getCarsByType = (findType, q = "") =>
  Promise.resolve(
    cars.filter(
      ({ type, name }) =>
        type === findType && name.toLowerCase().includes(q.toLowerCase())
    )
  );
