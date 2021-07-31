import React, { useState } from 'react'
import Link from 'next/link'
import StarRatings from 'react-star-ratings'
import { Image, Text } from '../../components/atoms'
import { Pagination } from '../../components/molecules'
import { Navbar, Footer, Filter} from '../../components/organisms'

export default function Review() {
  const [state, setState] = useState({
    dataSchool: [{
      id: 1,
      schoolName: 'SMK NEGERI 26 JAKARTA',
      address: 'Jl. Balai Pustaka Baru I',
      province: 'Prov. D.K.I. Jakarta',
      city: 'Jakarta Timur',
      rate: 4.403,
      expand: false
    }, {
      id: 2,
      schoolName: 'SMAN 8 JAKARTA',
      address: 'Jl. Taman Bukit Duri No.2',
      province: 'Prov. D.K.I. Jakarta',
      city: 'Jakarta Selatan',
      rate: 5,
      expand: false
    }, {
      id: 3,
      schoolName: 'SMAN 5 SURABAYA',
      address: 'Jl. Kusuma Bangsa No.21',
      province: 'Prov. Surabaya',
      city: 'Kota Surabaya',
      rate: 4.103,
      expand: false
    }, {
      id: 4,
      schoolName: 'SMAS DIAN HARAPAN',
      address: 'Jl. Bedugul No.5B',
      province: 'Prov. D.K.I. Jakarta',
      city: 'Jakarta Barat',
      rate: 3.803,
      expand: false
    }, {
      id: 5,
      schoolName: 'SMAN 1 YOGYAKARTA',
      address: 'Jl. HOS Cokroaminoto No.10',
      province: 'Prov. D.I. Yogyakarta',
      city: 'Kota Yogyakarta',
      rate: 4.903,
      expand: false
    }]
  })

  const handleShowDetail = (id, idx) => {
    let schoolState = [...state.dataSchool]
    let schoolElement = schoolState.filter(school => school.id === id)

    schoolElement[0].expand = !schoolElement[0].expand
    schoolState[idx] = schoolElement[0]

    setState({
      dataSchool: schoolState
    })
  }

  return (
    <React.Fragment>
      <header className="bg-gray rounded z-50 m-3 hp:h-72 laptop:h-56 py-4">
        <Navbar />
      </header>

      <section>
        <div className="
          grid
          hp:gap-10 table:gap-20
          mx-8 hp:mx-8 laptop:mx-24
          hp:grid-flow-row laptop:grid-flow-col gap-4
          grid-cols-1 hp:grid-cols-1 tablet:grid-cols-2
        ">
          <Filter />
          <div className="
            p-8
            z-50
            bg-white
            shadow-xl
            rounded-lg
            hp:col-span-1 laptop:col-span-12
          ">
            {(state.dataSchool || []).map((data, idx) => (
              <div key={data.id}>
                <div
                  className="px-4 text-md relative text-primary cursor-pointer hp:pb-8 laptop:pb-0 border-b-4 border-gray"
                  onClick={() => handleShowDetail(data.id, idx)}
                  key={data.id}
                >
                  <Image
                    classWrap={`absolute inset-y-1/2 hp:right-4 tablet:right-8 transition transform ${data.expand ? '-rotate-180' : 'rotate-0'}`}
                    alt="arrow-down"
                    src={require('../../assets/icons/arrow-black.svg')}
                  />
                  <Text classText="font-medium">{data.schoolName}</Text>
                  <Text classText="
                    hp:mb-6 laptop:mb-8
                    text-sm
                    text-gray-200
                  ">
                    {data.address}
                  </Text>
                  <div className="
                    grid
                    hp:grid-cols-1 laptop:grid-cols-3
                  ">
                    <Text classText="
                      text-sm
                      hp:mb-2 laptop:mb-8
                    ">
                      {`Provinsi: ${data.province}`}
                    </Text>
                    <Text classText="
                      text-sm
                      hp:mb-2 laptop:mb-8
                    ">
                      {`Kota/Kab: ${data.city}`}
                    </Text>
                    <StarRatings
                      rating={data.rate}
                      starDimension="20px"
                      starRatedColor="#FFE095"
                    />
                  </div>
                </div>

                <Link href="/detail">
                  <div className={`p-2 cursor-pointer text-center bg-blue-200 rounded-br-lg rounded-bl-lg transition transform duration-100 ${data.expand ? 'mb-8 opacity-1' : 'mb-0 opacity-0 translate-y-6'}`}>
                    <a className="text-white font-semibold">
                      Lihat Detail
                    </a>
                  </div>
                </Link>
              </div>
            ))}

            <Pagination />
          </div>
        </div>
        <div className="
          hp:h-56 laptop:h-96
          hp:top-72 laptop:top-48
          py-4 mx-3 left-0 right-0 bg-gray absolute
        "/>
      </section>

      <Footer />
    </React.Fragment>
  )
}
