import React from 'react'

interface PropImageTypes {
  src: any
  alt: string
  height: string
  width: string
  classWarp?: string
  classImage?: string
}

export default function Image({
  src,
  alt,
  height,
  width,
  classWarp,
  classImage,
}: PropImageTypes): any {
  return (
    <React.Fragment>
      <div className={classWarp}>
        <img src={src} alt={alt} className={classImage} height={height} width={width} />
      </div>
    </React.Fragment>
  )
}
