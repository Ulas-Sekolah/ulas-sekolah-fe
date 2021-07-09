import React from 'react'

interface PropSubHeading {
  classText?: string
  children: string
}

export default function SubHeading({
  classText,
  children,
}: PropSubHeading): any {
  return <p className={`text-sm font-extralight leading-relaxed mt-7 tracking-wider text-primary ${classText}`}>{children}</p>
}
