import React from 'react';
import st from './FromsControls.module.css';

const FormControl = ({
// @ts-ignore
                       input,  meta: { touched, error }, children,
                       ...props
                     }) => {
  const hasError = touched && error;
  return (
    <div className={st.formControl + ' ' + (hasError && st.error)}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
}

export const TextArea = (props: any) => {
  const { input, meta, ...restProps } = props;
  return <FormControl  {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props: any) => {
  const { input, meta, ...restProps } = props;
  return <FormControl  {...props}><input {...input} {...restProps} /></FormControl>
};


