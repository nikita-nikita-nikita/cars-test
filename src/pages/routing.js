import { Cars } from "./Cars";
import { Routes, Route } from "react-router-dom";

export const routing = {
  cars: {
    url: "/cars/:type",
    Component: Cars,
  },
};

export const Routing = () => {
  return (
    <Routes>
      {Object.values(routing).map(({ Component, url }) => (
        <Route key={url} element={<Component />} path={url} />
      ))}
    </Routes>
  );
};
