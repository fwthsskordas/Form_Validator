import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export type FormHandler = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandler, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
});

export default Form;
