function validateValue(value, min, max) {
  if (value < min || value > max) {
    throw new Error('Value is out of range.');
  }
  return value;
}

// Usage
try {
  const validValue = validateValue(10, 1, 100); // This will pass
  console.log('Valid value:', validValue);
} catch (error) {
  console.error(error.message);
}
