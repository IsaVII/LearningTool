// Step 1 (Red): write the test first, before the implementation exists
test("formatPrice adds a dollar sign and 2 decimals", () => {
  expect(formatPrice(9)).toBe("$9.00");
});

// Step 2 (Green): write the simplest code that makes it pass
function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

// Step 3: a new test describes a case the simple version ignores
test("formatPrice rejects non-numeric input", () => {
  expect(() => formatPrice("nine")).toThrow(TypeError);
});

// Refactor: make the failure explicit, without changing passing tests
function formatPrice(amount) {
  if (typeof amount !== "number") {
    throw new TypeError("formatPrice expects a number");
  }
  return `$${amount.toFixed(2)}`;
}
