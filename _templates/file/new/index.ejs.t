---
to: src/<%= h.changeCase.kebab(name) %>.ts
---

export const <%= h.changeCase.camel(name) %> = (a: number, b: number): number => {
  return a + b
}
