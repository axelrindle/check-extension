# check-extension
> Check whether a file has a given extension.

## Install
```bash
npm install check-extension
```
or
```bash
yarn add check-extension
```

## Usage
```javascript
const checkExtension = require("check-extension");

var isJsFile = checkExtension("myFile.js", ".js"); // => true
var isJsonFile = checkExtension("myFile.js", ".json"); // => false
var isMarkdownFile = checkExtension("README.md", [".md", ".markdown"]); // => true
```

## API
### `function checkExtension(file, extensions)`
> Checks whether a file has a given extension.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| file | string | The path of the file to check. |
| extensions | string/array | One or more allowed extensions. |

#### Returns
`true` if the extensions matched, `false` otherwise.

## Testing
```bash
npm run test
```
or
```bash
yarn run test
```

## License
```
MIT License

Copyright (c) 2017 Axel Rindle <axel.rindle@gmx.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
