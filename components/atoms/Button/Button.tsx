import React from 'react'

interface PropButtonTypes {
  dataText?: string
  classWarp?: string
  classButton?: string
  children: JSX.Element|JSX.Element[]
}

export default function Button({
  classWarp,
  classButton,
  children,
  dataText,
}: PropButtonTypes): any {
  return (
    <React.Fragment>
      <div className={classWarp}>
        <button type="submit" data-text={dataText} className={classButton}>{children}</button>
      </div>
    </React.Fragment>
  )
}
