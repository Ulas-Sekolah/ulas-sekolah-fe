import React from 'react'

interface PropImageTypes {
  src: any
  alt: string
  height?: string
  width?: string
  classWrap?: string
  classImage?: string
}

export default function Image({
  src,
  alt,
  height,
  width,
  classWrap,
  classImage,
}: PropImageTypes): any {
  return (
    <React.Fragment>
      <div className={classWrap}>
        <img src={src} alt={alt} className={classImage} height={height} width={width} />
      </div>
    </React.Fragment>
  )
}
