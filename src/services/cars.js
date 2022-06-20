import { cars } from "./carsData";

export const getAllCars = () => Promise.resolve(cars);

export const getCarsByType = (findType) =>
  Promise.resolve(cars.filter(({ type }) => type === findType));
