 export const required = value => {
  if (value) return undefined;
  return 'Required field';
};

export const maxTextLength = maxLength => value => {
  if (value && value.length > maxLength) return `Max length is ${maxLength}`;
  return '';
};

export const composeValidators = (...validators) => value => {
  return validators.reduce((error, validator) => error || validator(value), undefined);
};
