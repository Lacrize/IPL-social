import { isValidEmail } from "./emailValidate";

test("Valid simple mail", () => {
  expect(isValidEmail("test@example.com")).toBe(true);
});

test("mail without @", () => {
  expect(isValidEmail("testexample.com")).toBe(false);
});
