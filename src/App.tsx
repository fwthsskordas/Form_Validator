import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Form, { FormHandler } from "./components/Form";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandler>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Number" id="number" />
        <p>
          <Button> Save </Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
