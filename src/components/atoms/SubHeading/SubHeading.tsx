import React from 'react'
import { useStore } from 'provider'

interface PropSubHeading {
  classText?: string
  children: string
}

export default function SubHeading({
  classText,
  children,
}: PropSubHeading): any {
  const { drakMode } = useStore()

  return <h5 className={`text-xl font-semibold leading-snug ${drakMode ? 'text-white' : 'text-primary'} ${classText}`}>{children}</h5>
}
