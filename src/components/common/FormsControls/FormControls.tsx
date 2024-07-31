import { InputHTMLAttributes, ReactNode } from 'react';
import st from './FormsControls.module.css';

type FormControlProps =  {
	meta: { 
		touched: boolean
		error: string
	}
	// meta
	input: InputHTMLAttributes<HTMLInputElement>
  children: ReactNode,
}

const FormControl = ({
  input,
  meta: { touched, error },
  children,
  ...props
}: FormControlProps) => {
  const hasError = touched && error;
  return (
    <div className={st.formControl + ' ' + (hasError && st.error)}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = (props: any) => {
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

export const Input = (props: any) => {
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
