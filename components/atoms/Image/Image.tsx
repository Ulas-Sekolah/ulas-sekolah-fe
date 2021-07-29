import React from 'react'

interface PropImageTypes {
  src: any
  alt: string
  key?: number
  height?: string
  width?: string
  classWrap?: string
  classImage?: string
}

export default function Image({
  src,
  alt,
  key,
  height,
  width,
  classWrap,
  classImage,
}: PropImageTypes): any {
  return (
    <div key={key} className={classWrap}>
      <img src={src} alt={alt} className={classImage} height={height} width={width} />
    </div>
  )
}
