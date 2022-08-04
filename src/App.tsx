import styled from "styled-components";
import { DynamicForm } from "./DynamicForm";

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <DynamicForm />
    </Container>
  );
};

export default App;
