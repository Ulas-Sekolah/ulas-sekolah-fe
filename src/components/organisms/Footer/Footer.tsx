import React from 'react'
import { SubHeading, Text } from 'components/atoms'
import { Button, Image } from 'components/atoms'
import { useStore } from 'provider'

export default function Footer() {
  const { drakMode } = useStore()

  return (
    <footer className={`
      rounded
      clear-both
      mt-24 hp:px-10 laptop:px-24 py-16 w-100
      grid hp:grid-cols-1 laptop:grid-cols-3
      hp:gap-16 laptop:gap-x-36 laptop:gap-y-20
      ${drakMode ? 'bg-black' : 'bg-gray'}
    `}>
      <div>
        <SubHeading>Rating Sekolah</SubHeading>
        <Text classText={`mt-7 text-md font-extralight ${drakMode ? 'text-white' : 'text-primary'}`}>Kami hadir menciptakan fitur untuk memudahkan anak bangsa mencari sekolah favoritnya berdasarkan rating, jurusan, ekskul dan fasilitas sekolah. (<span className='text-blue-200 cursor-pointer'>selangkapnya...</span>)</Text>
        <Text classText={`mt-7 text-sm font-medium ${drakMode ? 'text-white' : 'text-primary'}`}>Gedung Rating Sekolah, Jl. BB I Cip. Muara No. 29, Jakarta Timur 13420</Text>
      </div>
      <div>
        <SubHeading>Site Map</SubHeading>
        <ul className={`mt-7 ${drakMode ? 'text-white' : 'text-primary'}`}>
          <li className='mt-2 font-extralight'>FAQ</li>
          <li className='mt-2 font-extralight'>Syarat & Ketentuan</li>
          <li className='mt-2 font-extralight'>Media</li>
          <li className='mt-2 font-extralight'>Corporate Partnership</li>
          <li className='mt-2 font-extralight'>Admin</li>
          <li className='mt-2 font-extralight'>Kotak Saran</li>
        </ul>
      </div>
      <div className='text-right'>
        <SubHeading classText=''>Unduh App di</SubHeading>
        <div className='mt-7 flex justify-end laptop:justify-between desktop:justify-end'>
          <Image src='/assets/images/gplay.png' alt='G-Play' height={40} width={130} layout='fixed' />
          <Image src='/assets/images/appstore.png' alt='App-Store' height={40} width={130} layout='fixed' classWrap='ml-3' />
        </div>
        <Text classText={`mt-7 text-sm font-medium ${drakMode ? 'text-white' : 'text-primary'}`}>Kamu alumni sekolah mana?</Text>
        <Button onClick={null} classButton='bg-blue-200 py-1.5 px-5 rounded-lg flex items-center mt-2.5' classWrap='flex justify-end'>
          <Image
            src='/assets/icons/graduate.svg'
            alt='Graduate Image'
            classWrap='
              w-4 lg:w-5
              h-4 lg:h-5
              col-end-2
              col-start-1
            '
          />
          <span className='text-white ml-2 font-light text-base'>Daftar</span>
        </Button>
      </div>
      <Text classText={`mt-0 text-md font-extralight ${drakMode ? 'text-white' : 'text-primary'}`}>©RatingSekolah, 2021. All Rights Reserved</Text>
    </footer>
  )
}
