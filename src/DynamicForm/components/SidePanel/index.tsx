import { Field, useFieldStore } from "../../fields-state";
import { Container } from "./styled";

const SidePanel = () => {
  const addField = useFieldStore((state) => state.addField);

  const handleAdd = (type: Field) => {
    addField(type);
  };

  return (
    <Container>
      {Object.values(Field).map((type) => (
        <button key={type} onClick={() => handleAdd(type)}>
          add {type} field
        </button>
      ))}
    </Container>
  );
};

export default SidePanel;
