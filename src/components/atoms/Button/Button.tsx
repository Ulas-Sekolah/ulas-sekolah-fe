import React from 'react'

interface PropButtonTypes {
  onClick(): void
  dataText?: string
  classWrap?: string
  classButton?: string
  children: JSX.Element|JSX.Element[]
}

export default function Button({
  classWrap,
  classButton,
  children,
  dataText,
  onClick,
}: PropButtonTypes): any {
  return (
    <React.Fragment>
      <div className={classWrap}>
        <button type="submit" data-text={dataText} className={`focus:outline-none ${classButton}`} onClick={onClick}>{children}</button>
      </div>
    </React.Fragment>
  )
}
