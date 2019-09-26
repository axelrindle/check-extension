# check-extension
> Check whether a file has a given extension.

## Install
```bash
npm i check-extension
```

## Usage
```javascript
const checkExtension = require("check-extension");

let isJsFile = checkExtension("myFile.js", ".js"); // => true
let isJsonFile = checkExtension("myFile.js", ".json"); // => false
let isMarkdownFile = checkExtension("README.md", [".md", ".markdown"]); // => true
let isOtherFile = checkExtension("LICENSE", null); // => true
```

## API
### `function checkExtension(file, extensions)`
> Checks whether a file has a given extension.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| file | string | The path of the file to check. |
| extensions | `string`/`array` | One or more allowed extensions. Can be omitted (or set to a *falsy value* like `null`) to check whether a file has *no extension*. |

#### Returns
`true` if the extensions matched, `false` otherwise.

## Testing
```bash
npm test
```

## License
[MIT](LICENSE)
