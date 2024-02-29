import { ValidatorType } from "components/utils/validators/validators";
import React from "react";
import { Field } from "react-final-form";

export const createField = (name: string, id: string, component: any,
                            placeholder: string, validators: ValidatorType | undefined, props = {},
                            text = '') => (
  <div>
    {id && <label htmlFor={id}>{`${text}:`}</label>}
    <Field id={id} name={name} component={component} validate={validators}
           placeholder={placeholder} {...props} />
  </div>
)