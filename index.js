// Require modules
const path = require('path');

// invalid extensions parameter supplied
const invalidExtensionsParameter = param => {
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
  file = path.resolve(file);
  var ext = path.extname(file);

  // only one extension is allowed
  if (typeof extensions === "string") {
    return extensions === ext;
  }

  // multiple extensions are allowed
  else if (Array.isArray(extensions)) {
    return extensions.indexOf(ext) !== -1;
  }

  // no extensions is expected
  else if (!extensions) {
	  return ext === '';
  }

  // invalid options
  else invalidExtensionsParameter(extensions);
};
