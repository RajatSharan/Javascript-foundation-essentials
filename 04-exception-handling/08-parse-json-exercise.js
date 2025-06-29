function parseJSON(str) {
  try {
    let result = JSON.parse(str);
    return result;
  } catch (error) {
    throw new Error("Invalid JSON provided");
  } finally {
    console.log("parseJSON finished running");
  }
}
