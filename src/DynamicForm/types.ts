import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";

export type Values = Record<string, string>;

export type Errors = FieldErrorsImpl<DeepRequired<Values>>;

export type Register = UseFormRegister<Values>;
