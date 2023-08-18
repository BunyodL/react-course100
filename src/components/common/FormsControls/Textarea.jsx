import React from 'react';
import st from './FromsControls.module.css';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={st.formControl + ' ' + (hasError && st.error)}>
      <div>
        <textarea {...input} {...props}></textarea>
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};
