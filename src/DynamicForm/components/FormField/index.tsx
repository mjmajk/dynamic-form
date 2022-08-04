import { FC, memo } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Field } from "../../fields-state";
import { Container, Error, Input, Label } from "./styled";

interface Props {
  label: string;
  name: string;
  type: Field;
  register: UseFormRegister<FieldValues>;
  error?: string;
}

const validation: Partial<Record<Field, RegisterOptions>> = {
  [Field.Date]: {
    required: "Date is is required",
  },
  [Field.Number]: {
    required: "Field is required",
    min: { value: 1, message: "Value must be at least one" },
    max: { value: 20, message: "Value must max 20" },
  },
  [Field.Text]: {
    minLength: { value: 4, message: "Text must at least 4 chars length" },
    maxLength: { value: 9, message: "Text must at least 9 chars length" },
  },
};

const isFieldRow = (field: Field) =>
  [Field.Checkbox, Field.Color].includes(field);

export const FormField: FC<Props> = memo(
  ({ label, name, type, register, error }) => {
    return (
      <>
        <Container isRow={isFieldRow(type)}>
          <Label htmlFor={name}>{label}</Label>
          <Input type={type} {...register(name, validation[type])} />
        </Container>
        <Error>{error}</Error>
      </>
    );
  }
);
