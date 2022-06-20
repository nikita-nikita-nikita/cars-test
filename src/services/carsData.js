export const CARS_ENUM = {
  TWO_WHEELS: "two-wheels",
  ELECTRIC: "electric",
  SPORT: "sport",
};

export const cars = [
  {
    name: "BMW",
    type: CARS_ENUM.TWO_WHEELS,
    parts: ["engine", "wheel", "wheel", "sit"],
  },
  {
    name: "Some car",
    type: CARS_ENUM.TWO_WHEELS,
    parts: ["no-engine", "no-wheel", "spring", "gearbox"],
  },
  {
    name: "tesla",
    type: CARS_ENUM.ELECTRIC,
    parts: ["engine", "transmission", "wheel", "trunk"],
  },
  {
    name: "tesla-netesla",
    type: CARS_ENUM.ELECTRIC,
    parts: ["engine", "electric", "wheel", "electricity"],
  },
  {
    name: "ferrari",
    type: CARS_ENUM.SPORT,
    parts: ["super-engine", "transmission", "sport-wheel", "electricity"],
  },
  {
    name: "lamborghini",
    type: CARS_ENUM.SPORT,
    parts: ["mega-engine", "transmission", "sport-wheel", "electricity"],
  },
];
