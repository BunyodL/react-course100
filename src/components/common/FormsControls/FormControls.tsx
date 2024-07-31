import st from './FormsControls.module.css';
import { FieldRenderProps } from 'react-final-form';

export type FormControlProps<E extends HTMLElement = HTMLElement> = FieldRenderProps<
  string,
  E,
  string
>;

const FormControl = ({
  input,
  meta: { touched, error },
  children,
  ...props
}: FormControlProps<HTMLTextAreaElement & HTMLInputElement>) => {
  const hasError = touched && error;
  return (
    <div
      className={st.formControl + ' ' + (hasError && st.error)}
      {...props}
    >
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = (props: FormControlProps<HTMLTextAreaElement>) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea
        {...input}
        {...restProps}
      />
    </FormControl>
  );
};

export const Input = (props: FormControlProps<HTMLInputElement>) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input
        {...input}
        {...restProps}
      />
    </FormControl>
  );
};
