try {
  console.log(nonExistentVariable);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("A ReferenceError occurred!");
  } else {
    console.log("Some other error occurred!");
  }
} finally {
  console.log("Code executed.");
}
