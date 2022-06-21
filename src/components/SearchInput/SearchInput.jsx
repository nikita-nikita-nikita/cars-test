import { useFormInput } from "hooks/useFormInput";
import Container from "react-bootstrap/Container";
import { DebounceInput } from "react-debounce-input";

export const SearchInput = ({ q, setQ }) => {
  const changeUrl = (value) => {
    setQ(value);
  };
  const [value, onChange] = useFormInput({
    onValueChange: changeUrl,
    initialValue: q,
  });
  return (
    <Container className="p-2">
      <DebounceInput debounceTimeout={300} value={value} onChange={onChange} />
    </Container>
  );
};
