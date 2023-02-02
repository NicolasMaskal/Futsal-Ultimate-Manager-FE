export const capitalizeFirstLetter = (txt: string) => {
  return txt[0].toUpperCase() + txt.slice(1);
};

export const isEmail = (value: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

export const passwordContainsValidCharacters = (value: string) => {
  return /^[\w.@+-]+$/.test(value)
}