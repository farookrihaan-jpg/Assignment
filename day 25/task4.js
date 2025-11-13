function validateUser(name, email) {
  if (!name || name.trim() === "") {
    throw new Error("Invalid name! Name cannot be empty.");
  }

  if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Invalid email! Please enter a valid email address.");
  }

  console.log("Validation successful!");
}

try {
  validateUser("", "testemail.com");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Code executed.");
}
