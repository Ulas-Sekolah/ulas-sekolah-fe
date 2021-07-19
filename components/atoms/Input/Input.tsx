import React from 'react'

interface PropInputTypes {
  type: string
  classWrap?: string
  classInput?: string
  placeholder: string
}

export default function Input({
  type,
  classWrap,
  classInput,
  placeholder,
}: PropInputTypes): any {
  return (
    <React.Fragment>
      <div className={classWrap}>
        <input type={type} className={`focus:outline-none w-full ${classInput}`} placeholder={placeholder} />
      </div>
    </React.Fragment>
  )
}
