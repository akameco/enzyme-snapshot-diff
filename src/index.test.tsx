import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzymeDiffSnapshot from '.'

configure({ adapter: new Adapter() })

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
