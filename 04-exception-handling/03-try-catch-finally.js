try {
  let result = riskyFunction();
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Cleanup code always runs");
}
