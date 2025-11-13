function checkLimit(num) {
  if (num > 100) {
    throw new Error("Number cannot be greater than 100!");
  } else {
    console.log("Number is within the valid range:", num);
  }
}

try {
  checkLimit(150);
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Code executed.");
}
