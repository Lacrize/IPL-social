import { isValidEmail } from "./emailValidate";

test("Valid email address", () => {
  expect(isValidEmail("test@example.com")).toBe(true);
});
