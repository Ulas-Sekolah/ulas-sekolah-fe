import React from 'react'
import Image from 'next/image'

interface PropImageTypes {
  src: any
  alt: string
  key?: number
  layout?: any,
  height?: string | number
  width?: string | number
  classWrap?: string
  classImage?: string
}

export default function Img({
  src,
  alt,
  key,
  height,
  layout,
  width,
  classWrap,
  classImage,
}: PropImageTypes): any {
  return (
    <div key={key} className={classWrap} style={{ height, width }}>
      <Image src={src} alt={alt} layout={layout || 'responsive'} className={classImage} height={height || 'auto'} width={width || 'auto'} />
    </div>
  )
}
