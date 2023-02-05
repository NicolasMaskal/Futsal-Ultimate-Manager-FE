const isEmail = (value: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

export const validateFormEmail = <ValueType extends { email: string }>(
  values: ValueType,
  errors: Partial<ValueType> = {}
) => {
  if (!isEmail(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors
};
