import { cars } from "./carsData";

const promiseResolveTimeout = (data, timeout) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), timeout);
  });

const getRandomTimeout = () => Math.floor(Math.random() * 1000 + 500);

export const getAllCars = (q = "") =>
  promiseResolveTimeout(
    cars.filter(({ name }) => name.toLowerCase().includes(q.toLowerCase())),
    getRandomTimeout()
  );

export const getCarsByType = (findType, q = "") =>
  promiseResolveTimeout(
    cars.filter(
      ({ type, name }) =>
        type === findType && name.toLowerCase().includes(q.toLowerCase())
    ),
    getRandomTimeout()
  );
