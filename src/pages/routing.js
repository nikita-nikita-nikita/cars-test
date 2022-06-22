import { Cars } from "./Cars";
import { Main } from "./Main";
import { Routes, Route, Navigate } from "react-router-dom";

export const routing = {
  cars: {
    url: "/cars/:type",
    Component: Cars,
  },
  main: {
    url: "/",
    Component: Main,
  },
  notFound: {
    url: "*",
    Component: <Navigate to="/" replace />,
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
