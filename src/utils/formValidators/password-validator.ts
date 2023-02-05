interface PasswordConfirmValueType {
  password: string;
  confirmPassword: string;
}

const passwordContainsValidCharacters = (value: string) => {
  return /^[\w.@+-]+$/.test(value);
};
export const validateFormPassword = <ValueType extends PasswordConfirmValueType>(
  values: ValueType,
  errors: Partial<ValueType> = {}
) => {
  if (values.password !== values.confirmPassword) {
    errors.password = "Password don't match!";
  }
  if (values.password.length < 6) {
    errors.password = "Password must contain at least 6 characters!";
  }
  if (!passwordContainsValidCharacters(values.password)) {
    errors.password =
      "This value may contain only English letters, numbers, and @/./+/-/_ characters.";
  }
  return errors;
};
