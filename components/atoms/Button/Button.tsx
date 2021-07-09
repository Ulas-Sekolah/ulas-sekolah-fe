import React from 'react'

interface PropButtonTypes {
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
}: PropButtonTypes): any {
  return (
    <React.Fragment>
      <div className={classWrap}>
        <button type="submit" data-text={dataText} className={classButton}>{children}</button>
      </div>
    </React.Fragment>
  )
}
