import React from 'react'
import { SubHeading, Text } from '../../atoms'
import { Button, Image } from '../../../components/atoms'

export default function Footer() {
  return (
    <footer className="mt-96 px-24 py-16 w-100 bg-gray grid grid-cols-3 gap-36">
      <div>
        <SubHeading>Rating Sekolah</SubHeading>
        <Text classText="font-extralight">Kami hadir menciptakan fitur untuk memudahkan anak bangsa mencari sekolah favoritnya berdasarkan rating, jurusan, ekskul dan fasilitas sekolah. (<span className="text-blue-200 cursor-pointer">selangkapnya...</span>)</Text>
        <Text classText="font-medium">Gedung Rating Sekolah, Jl. BB I Cip. Muara No. 29, Jakarta Timur 13420</Text>
        <Text classText="mt-24">©RatingSekolah, 2021. All Rights Reserved</Text>
      </div>
      <div>
        <SubHeading>Site Map</SubHeading>
        <ul className="mt-7">
          <li className="mt-2 font-extralight">FAQ</li>
          <li className="mt-2 font-extralight">Syarat & Ketentuan</li>
          <li className="mt-2 font-extralight">Media</li>
          <li className="mt-2 font-extralight">Corporate Partnership</li>
          <li className="mt-2 font-extralight">Admin</li>
          <li className="mt-2 font-extralight">Kotak Saran</li>
        </ul>
      </div>
      <div className="text-right">
        <SubHeading classText=''>Unduh App di</SubHeading>
        <div className="mt-7 flex justify-between">
          <Image src={require('../../../assets/images/gplay.png')} alt="banner" />
          <Image src={require('../../../assets/images/appstore.png')} alt="banner"  />
        </div>
        <Text classText="mt-7 font-medium">Kamu alumni sekolah mana?</Text>
        <Button classButton="bg-blue-200 py-1.5 px-5 rounded-lg flex items-center mt-2.5" classWrap="flex justify-end">
          <Image
            src={require('../../../assets/icons/graduate.svg')}
            alt="Graduate Image"
            classWrap="
              w-4 lg:w-5
              h-4 lg:h-5
              col-end-2
              col-start-1
            "
          />
          <span className="text-white ml-2 font-light text-base">Daftar</span>
        </Button>
      </div>
    </footer>
  )
}
