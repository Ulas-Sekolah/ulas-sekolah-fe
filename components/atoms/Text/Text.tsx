import React from 'react'

interface PropSubHeading {
  classText?: string
  children: any
}

export default function SubHeading({
  classText,
  children,
}: PropSubHeading): any {
  return <p className={`text-sm font-extralight leading-relaxed tracking-wider text-primary ${classText || ''}`}>{children}</p>
}
