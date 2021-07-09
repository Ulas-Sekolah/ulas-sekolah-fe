import React from 'react'

interface PropSubHeading {
  classText?: string
  children: string
}

export default function SubHeading({
  classText,
  children,
}: PropSubHeading): any {
  return <h5 className={`${classText} text-xl font-semibold leading-snug text-primary`}>{children}</h5>
}
