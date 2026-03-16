import { nanoid } from 'nanoid';

export function createSession() {
  const secret = nanoid(21);
  return { secret };
}

export function validateSecret(provided, expected) {
  if (!provided || !expected) return false;
  if (provided.length !== expected.length) return false;
  let result = 0;
  for (let i = 0; i < provided.length; i++) {
    result |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return result === 0;
}
