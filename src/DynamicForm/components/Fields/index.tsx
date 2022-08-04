import { FC } from "react";
import { useFieldStore } from "../../fields-state";
import { Errors, Register } from "../../types";
import { FormField } from "../FormField";

interface Props {
  register: Register;
  errors: Errors;
}

export const Fields: FC<Props> = ({ register, errors }) => {
  const fields = useFieldStore((state) => state.fields);

  return (
    <>
      {fields.map((field) => (
        <FormField
          error={errors[field.name]?.message}
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          register={register}
        />
      ))}
    </>
  );
};
