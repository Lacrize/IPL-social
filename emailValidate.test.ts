import { isValidEmail } from "./emailValidate";

test("Valid simple mail", () => {
  expect(isValidEmail("test@example.com")).toBe(true);
});

test("mail without @", () => {
  expect(isValidEmail("testexample.com")).toBe(false);
  expect(isValidEmail("teste@xamplecom")).toBe(true);
});

test("mail without text before of after @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
});
