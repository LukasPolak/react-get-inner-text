import React from 'react'
import { getInnerText } from '../src'

describe('getInnerText', () => {
  it('should support null', () => {
    expect(getInnerText(null)).toBe('')
  })

  it('should support undefined', () => {
    expect(getInnerText(undefined)).toBe('')
  })

  it('should support booleans', () => {
    expect(getInnerText(true)).toBe('')
    expect(getInnerText(false)).toBe('')
  })

  it('should support numbers', () => {
    expect(getInnerText(128)).toBe('128')
    expect(getInnerText(512.256)).toBe('512.256')
  })

  it('should support empty strings', () => {
    expect(getInnerText('')).toBe('')
  })

  it('should support strings', () => {
    expect(getInnerText('Hello, world!')).toBe('Hello, world!')
  })

  it('should support empty objects', () => {
    expect(getInnerText({})).toBe('')
  })

  // TODO: implement test for filled object

  it('should support empty arrays', () => {
    expect(getInnerText([])).toBe('')
  })

  it('should support empty ReactElements', () => {
    expect(getInnerText(<div />)).toBe('')
  })

  it('should support ReactElements', () => {
    expect(getInnerText(<div>This is a React Element.</div>)).toBe(
      'This is a React Element.'
    )
  })

  it('should support nested ReactElements without content', () => {
    expect(
      getInnerText(
        <div>
          <p />
        </div>
      )
    ).toBe('')
  })

  it('should support nested ReactElements', () => {
    expect(
      getInnerText(
        <div>
          <p>First paragraph.</p>
          <p>Second paragraph</p>
        </div>
      )
    ).toBe('First paragraph.Second paragraph')
  })

  it('should support ReactFragments', () => {
    expect(getInnerText(<>This is a React Element.</>)).toBe(
      'This is a React Element.'
    )
  })

  it('should support arrays', () => {
    expect(
      getInnerText([
        null,
        undefined,
        true,
        false,
        128,
        512.256,
        '',
        'Hello.',
        {},
        [],
        <div />,
        <div>This is a React Element.</div>,
        <div>
          <p />
        </div>,
        <div>
          <p>First paragraph.</p>
          <p>Second paragraph</p>
        </div>,
      ])
    ).toBe(
      '128512.256Hello.This is a React Element.First paragraph.Second paragraph'
    )
  })
})
