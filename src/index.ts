import { ReactNode } from 'react'

export const getInnerText = (jsx: ReactNode): string => {
  if (!jsx || typeof jsx === 'boolean') {
    return ''
  }

  if (typeof jsx === 'number') {
    return (jsx as number).toString()
  }

  if (typeof jsx === 'string') {
    return jsx
  }

  if (Array.isArray(jsx)) {
    return (jsx as Array<any>).reduce<string>(
      (previous: string, current: JSX.Element) => {
        return `${previous}${getInnerText(current)}`
      },
      ''
    )
  }

  if (
    Object.prototype.hasOwnProperty.call(jsx, 'props') &&
    Object.prototype.hasOwnProperty.call((jsx as JSX.Element).props, 'children')
  ) {
    return getInnerText((jsx as JSX.Element).props.children)
  }

  return ''
}
