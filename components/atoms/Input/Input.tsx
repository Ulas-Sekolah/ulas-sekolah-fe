import React from 'react'

interface PropInputTypes {
  type: string
  classWarp?: string
  classInput?: string
  placeholder: string
}

export default function Input({
  type,
  classWarp,
  classInput,
  placeholder,
}: PropInputTypes): any {
  return (
    <React.Fragment>
      <div className={classWarp}>
        <input type={type} className={classInput} placeholder={placeholder} />
      </div>
    </React.Fragment>
  )
}
