import { useState } from "react";

const defaultMapValue = (e) => e.target.value;

export const useFormInput = ({
  initialValue = "",
  mapValue = defaultMapValue,
  onValueChange = () => {},
} = {}) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const newValue = mapValue(e);
    onValueChange(newValue);
    setValue(newValue);
  };
  return [value, onChange, setValue];
};
