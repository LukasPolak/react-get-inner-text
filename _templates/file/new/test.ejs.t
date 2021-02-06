---
to: test/<%= h.changeCase.kebab(name) %>.test.ts
---

import { <%= h.changeCase.camel(name) %> } from '../src/<%= h.changeCase.kebab(name) %>'

describe('<%= h.changeCase.camel(name) %>', () => {
  it('should ', () => {
    expect(<%= h.changeCase.kebab(name) %>(1, 1)).toBe(2)
  })
})
