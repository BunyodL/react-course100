export type ValidatorType = (value: string) => (string | undefined)

export const required: ValidatorType = (value) => {
  if (value) return undefined;
  return 'Required field';
};

export const maxTextLength = (maxLength: number): ValidatorType => (value) => {
  if (value && value.length > maxLength) return `Max length is ${maxLength}`;
  return undefined;
};

export const composeValidators = (...validators: Array<ValidatorType>) => (value: string) => {
  return validators.reduce((error: string | undefined, validator) => error || validator(value), undefined);
};
