# enzyme-snapshot-diff

[![Build Status](https://travis-ci.com/akameco/enzyme-snapshot-diff.svg?branch=master)](https://travis-ci.com/akameco/enzyme-snapshot-diff)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> snapshot-diff for enzyme

## Install

```
$ npm install enzyme-snapshot-diff
```

## Usage

```js
import { mount } from 'enzyme'
import enzymeDiffSnapshot from 'enzyme-snapshot-diff'

test('snapshot', () => {
  const a = mount(<div>hello</div>)
  const b = mount(<div>world</div>)
  expect(enzymeDiffSnapshot(a, b)).toMatchInlineSnapshot(`
"Snapshot Diff:
- First value
+ Second value

  <div>
-   hello
+   world
  </div>"
`)
})
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://akameco.github.io"><img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;" alt="akameco"/><br /><sub><b>akameco</b></sub></a><br /><a href="https://github.com/akameco/enzyme-snapshot-diff/commits?author=akameco" title="Code">💻</a> <a href="https://github.com/akameco/enzyme-snapshot-diff/commits?author=akameco" title="Documentation">📖</a> <a href="https://github.com/akameco/enzyme-snapshot-diff/commits?author=akameco" title="Tests">⚠️</a> <a href="#infra-akameco" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
