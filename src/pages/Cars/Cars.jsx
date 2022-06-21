import { useParams } from "react-router-dom";
import { CarsList } from "components/CarsList";
import { SearchInput } from "components/SearchInput";
import { useEffect, useState } from "react";

export const Cars = () => {
  const [q, setQ] = useState("");
  const { type } = useParams();
  useEffect(() => {
    setQ("");
  }, [type]);
  return (
    <>
      <SearchInput q={q} setQ={setQ} />
      <CarsList type={type} q={q} />
    </>
  );
};
