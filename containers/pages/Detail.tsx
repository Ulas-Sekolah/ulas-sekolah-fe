import React from 'react'
import { Button, Image } from '../../components/atoms'
import { Footer} from '../../components/organisms'
import { useRouter } from 'next/router'
import { Slider } from '../../components/molecules'

const staticSchoolImages: any[] = [{
  id: 1,
  imgThumb: require('../../assets/images/images-detail-school/Sma8-1.jpeg'),
}, {
  id: 2,
  imgThumb: require('../../assets/images/images-detail-school/Sma8-2.jpeg'),
}, {
  id: 3,
  imgThumb: require('../../assets/images/images-detail-school/Sma8-3.jpeg'),
}]

export default function Detail() {
  const router = useRouter()

  return (
    <>
      <Button classButton="
        hp:mx-10 laptop:mx-24
        mt-3 hp:mt-3 tablet:mt-5 laptop:mt-20
        bg-blue-200 py-1.5 px-5 rounded-lg flex items-center my-4
      "
      onClick={() => router.back()}
      >
        <Image
          src={require('../../assets/icons/arrow-white.svg')}
          alt="arrow-white"
          classImage="
            w-3 lg:w-4
            h-3 lg:h-4
          "
          classWrap="
            flex
            col-end-2
            col-start-1
            transform
            rotate-90
            justify-center
            align-center
            mr-3
          "
        />
        <span className="text-white font-medium">Kembali</span>
      </Button>
      <div className="
        hp:mx-10 laptop:mx-24
        mt-3 hp:mt-3 tablet:mt-5 laptop:mt-28
      ">
        <h1 className="text-3xl font-semibold">SMAN 8 JAKARTA</h1>
        <div className="
          grid
          hp:gap-10 table:gap-20
          hp:grid-flow-row laptop:grid-flow-col gap-2
          grid-cols-1 hp:grid-cols-1 tablet:grid-cols-2
        ">
          <div className="p-4 shadow-xl rounded-lg mt-8 flex flex-col justify-center h-60">
            <p className="text-8xl font-bold flex justify-center">A</p>
            <p className="text-2xl font-semibold flex justify-center">Akreditasi</p>
          </div>
          <div className="overflow-hidden shadow-xl rounded-lg mt-8 hp:col-span-1 laptop:col-span-12 h-60">
            <Slider images={staticSchoolImages}/>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
