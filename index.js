// Require modules
const path = require('path');

// invalid extensions parameter supplied
var invalidExtensionsParameter = (param) => {
  throw new Error("Invalid extension parameter! Wanted string or array, but got " + typeof param);
};

/**
 * Checks whether a file has a given extension.
 *
 * @param file {string} The path of the file to check.
 * @param extensions {array|string} One or more allowed extensions.
 * @returns true if the extensions matched, false otherwise.
 */
module.exports = checkExtension = (file, extensions) => {
  file = path.resolve(file); // resolve absoulte file path
  var ext = path.extname(file); // get extension

  if (typeof extensions === "string") { // we got a string here
    // does the file extension match the given extension?
    if (extensions !== ext) return false;
  }
  else if (typeof extensions === "object") { // not a string
    if (Array.isArray(extensions)) { // make sure we have an array

      // does the array contain the extension of the file?
      if (extensions.indexOf(ext) === -1) return false;
    } else invalidExtensionsParameter(extensions); // we got something else here
  }
  // we got something else here
  else invalidExtensionsParameter(extensions);

  // default case
  return true;
};
