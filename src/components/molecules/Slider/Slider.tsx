import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Image } from '../../atoms'

interface PropSliderTypes {
  images: any[]
}

export default function Slider({
  images,
}: PropSliderTypes): any {
  const timer: { current: NodeJS.Timeout | null } = React.useRef(null)
  const [pause, setPause] = React.useState<boolean>(false)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })
  
  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div ref={sliderRef} className="keen-slider">
      {(images || []).map(dataImg => (
        <Image key={dataImg.id} classWrap="keen-slider__slide" classImage="mx-auto object-cover h-60 w-full" src={dataImg.imgThumb} alt="img-slider"/>
      ))}
    </div>
  )
}
