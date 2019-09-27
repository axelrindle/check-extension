// Require module
const checkExtension = require("./");
const assert = require('assert');

// Do tests
describe('checkExtension', function() {
  it('should return true when extensions match (string parameter)', function() {
    assert.equal(checkExtension("index.js", ".js"), true);
  });

  it('should return true when extensions match (array parameter)', function() {
    assert.equal(checkExtension("README.md", [".md", ".markdown"]), true);
  });

  it('should return true when no extension exists (null parameter)', function() {
    assert.equal(checkExtension("LICENSE", null), true);
  });

  it('should return false when extensions don\'t match (string parameter)', function() {
    assert.equal(checkExtension("index.js", ".json"), false);
  });

  it('should return false when extensions don\'t match (array parameter)', function() {
    assert.equal(checkExtension("index.js", [".md", ".markdown"]), false);
  });

  it('should return false when an extension exists (null parameter)', function() {
    assert.equal(checkExtension("index.js", null), false);
  });

  it('should throw an error if an invalid extensions parameter is supplied', function() {
    assert.throws(() => checkExtension("README.md", {ext: "md"}), Error);
  });
});
