import { useState } from "react";

export function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // if (Object.values(values).some((x) => x == "")) {
    //   // throw new Error("Fields are required!");
    // }
    submitHandler(values);
  };

  return { values, onChange, onSubmit };
}
