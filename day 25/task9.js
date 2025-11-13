try {
  console.log(nonExistingVariable);
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
} finally {
  console.log("Code executed.");
}
