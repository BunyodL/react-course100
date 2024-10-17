import { ValidatorType } from 'utils/validators';
import { Field, SupportedInputs } from 'react-final-form';
import { FormControlProps } from '.';
import { FC } from 'react';

export const createField = <Name extends string>(
    name: Name,
    id: string,
    component: SupportedInputs | FC<FormControlProps>,
    placeholder?: string,
    validators?: ValidatorType,
    props = {},
    text = '',
) => (
    <div>
        {id && <label htmlFor={id}>{`${text}:`}</label>}
        <Field
            id={id}
            name={name}
            component={component}
            validate={validators}
            placeholder={placeholder}
            {...props}
        />
    </div>
);
