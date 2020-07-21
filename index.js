const whiteSpaceRemover = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("A string must be supplied as an argument")
  } else {
    const output = string.replace(/\s/g, "")
    return output
  }
}

module.exports = whiteSpaceRemover
