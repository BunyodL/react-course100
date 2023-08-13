import React from 'react';
import st from './FromsControls.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={st.formControl + ' ' + (hasError && st.error)}>
      <div>
        <textarea {...input} {...props}></textarea>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
