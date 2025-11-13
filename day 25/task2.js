try {
  console.log(unknownVariable);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("A ReferenceError occurred!");
  } else {
    console.log("Some other error occurred!");
  }
}
