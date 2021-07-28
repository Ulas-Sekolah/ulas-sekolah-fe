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
      
      <div>
        <div className="hp:mx-10 laptop:mx-24 mt-20">
          <h1 className="mb-5">Deskripsi</h1>
          <p className="font-extralight">Sekolah Menengah Atas Negeri 8 Jakarta atau dikenal juga dengan nama SMANDEL adalah salah satu SMA Negeri di Daerah Khusus Ibu Kota Jakarta yang memiliki akreditasi A. SMA Negeri 8 Jakarta berada di Tebet, Jakarta Selatan.<br/><br/>SMA Negeri 8 Jakarta dibuka/ didirikan pada tanggal 1 Agustus 1958 di Taman Slamet Rijadi Jakarta dengan nama SMA Negeri VIII/ABC dengan Sp. Menteri P.D.K. tanggal 21 Agustus 1958 No. 26/SK/B.111.<br /><br/>Pada bulan Januari 1959 dlakukan pemindahan tempat atau gedung sekolah di SMP Negeri III Jakarta, Jl. Manggarai Utara IV/6, Manggarai Utara, Jakarta Selatan. Dan pada tanggal 30 Maret 1971 SMA Negeri 8 Jakarta berdiri di Jalan Taman Bukitduri Tebet dan diresmikan oleh Gubernur Ali Sadikin.</p>
          <h1 className="mt-10 mb-5">Alamat</h1>
          <p className="font-extralight">Jl. Taman Bukit Duri No.2</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
