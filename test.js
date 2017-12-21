// Require module
const checkExtension = require("./");
const assert = require('assert');

// Do tests
describe('#checkExtension', function() {
  it('should return true when extensions match (string parameter)', function() {
    assert.equal(checkExtension("index.js", ".js"), true);
  });
});

describe('#checkExtension', function() {
  it('should return true when extensions match (array parameter)', function() {
    assert.equal(checkExtension("README.md", [".md", ".markdown"]), true);
  });
});

describe('#checkExtension', function() {
  it('should return false when extensions don\'t match (string parameter)', function() {
    assert.equal(checkExtension("index.js", ".json"), false);
  });
});

describe('#checkExtension', function() {
  it('should return false when extensions don\'t match (array parameter)', function() {
    assert.equal(checkExtension("index.js", [".md", ".markdown"]), false);
  });
});

describe('#checkExtension', function() {
  it('should throw an error if an invalid extensions parameter is supplied', function() {
    assert.throws(() => checkExtension("README.md", {ext: "md"}), Error);
  });
});
