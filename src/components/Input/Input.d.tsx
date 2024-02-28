export const inputTypes = ['text', 'number', 'password'] as const;
export type InputType = typeof inputTypes[number];