export const validateFormTeamName = <ValueType extends { teamName: string }>(
  values: ValueType,
  errors: Partial<ValueType> = {}
) => {
  if (values.teamName.length < 3) {
    errors.teamName = "Team name has to be at least 3 characters long!";
  }
  if (values.teamName.length > 32) {
    errors.teamName = "Team names must be limited to a maximum of 32 characters!";
  }
  return errors;
};
