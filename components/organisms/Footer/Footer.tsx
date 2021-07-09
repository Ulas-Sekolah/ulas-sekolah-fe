import React from 'react'
import { SubHeading, Text } from '../../atoms'
import { Button, Image } from '../../../components/atoms'

export default function Footer() {
  return (
    <section className="my-96 w-100 bg-gray">
      <div>
        <SubHeading classText=''>Rating Sekolah</SubHeading>
        <Text>Kami hadir menciptakan fitur untuk memudahkan anak bangsa mencari sekolah favoritnya berdasarkan rating, jurusan, ekskul dan fasilitas sekolah. (selangkapnya...)</Text>
        <Text>Gedung Rating Sekolah, Jl. BB I Cip. Muara No. 29, Jakarta Timur 13420</Text>
        <Text>©RatingSekolah, 2021. All Rights Reserved</Text>
      </div>
      <div>
        <SubHeading classText=''>Site Map</SubHeading>
        <ul>
          <li>FAQ</li>
          <li>Syarat & Ketentuan</li>
          <li>Media</li>
          <li>Corporate Partnership</li>
          <li>Admin</li>
          <li>Kotak Saran</li>
        </ul>
      </div>
      <div>
        <SubHeading classText=''>Unduh App di</SubHeading>
        <h5></h5>
        <Image src={require('../../../assets/images/gplay.png')} alt="banner" classImage="" />
        <Image src={require('../../../assets/images/appstore.png')} alt="banner"  classImage="" />
        <Text>Kamu alumni sekolah mana?</Text>
      </div>
    </section>
  )
}
