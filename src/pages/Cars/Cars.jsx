import { useParams } from "react-router-dom";
import { CarsList } from "components/CarsList";
import { SearchInput } from "components/SearchInput";
import { useEffect, useState } from "react";
import { Nav } from "../../components/Nav";

export const Cars = () => {
  const [q, setQ] = useState("");
  const { type } = useParams();
  useEffect(() => {
    setQ("");
  }, [type]);
  return (
    <>
      <Nav />
      <SearchInput q={q} setQ={setQ} />
      <CarsList type={type} q={q} />
    </>
  );
};
