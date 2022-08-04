import { useForm } from "react-hook-form";
import { Fields } from "./components/Fields";
import SidePanel from "./components/SidePanel";
import { Container } from "./styled";
import { Values } from "./types";

export const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>();

  return (
    <Container>
      <SidePanel />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Fields register={register} errors={errors} />
        <input type="submit" />
      </form>
    </Container>
  );
};
