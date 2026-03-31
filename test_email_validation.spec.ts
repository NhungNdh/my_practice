import { test, expect } from '@playwright/test';

// Email validation using Regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Test data: { email, expected, description }
const testData = [
  { email: 'user@example.com',        expected: true,  description: 'valid standard email' },
  { email: 'user.name+tag@domain.org', expected: true,  description: 'valid email with dot, plus sign' },
  { email: 'invalid-email',            expected: false, description: 'missing @ and domain' },
  { email: 'missing@dotcom',           expected: false, description: 'missing TLD dot' },
  { email: '@nodomain.com',            expected: false, description: 'missing local part' },
];

for (const { email, expected, description } of testData) {
  test(`Email validation: "${email}" — ${description}`, () => {
    const result = isValidEmail(email);
    expect(result).toBe(expected);
  });
}
