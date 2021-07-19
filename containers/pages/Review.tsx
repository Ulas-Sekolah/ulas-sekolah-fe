import React from 'react'
import StarRatings from 'react-star-ratings'
import { Image, Input, Pagination, Text } from '../../components/atoms'
import { Navbar, Footer} from '../../components/organisms'

class Review extends React.Component {
  render() {
    const dataSchool = [{
      id: 1,
      schoolName: 'SMK NEGERI 26 JAKARTA',
      address: 'Jakarta Timur',
      avarage: '525,782',
      npsn: '20103787',
      rate: 4.403,
    }, {
      id: 2,
      schoolName: 'SMAN 8 JAKARTA',
      address: 'Jakarta Selatan',
      avarage: '594,865',
      npsn: '20102568',
      rate: 5,
    }, {
      id: 3,
      schoolName: 'SMAN 5 SURABAYA',
      address: 'Kota Surabaya',
      avarage: '594,605',
      npsn: '20532248',
      rate: 4.103,
    }, {
      id: 4,
      schoolName: 'SMAS DIAN HARAPAN',
      address: 'Jakarta Barat',
      avarage: '589,811',
      npsn: '20104413',
      rate: 3.803,
    }, {
      id: 5,
      schoolName: 'SMAN 1 YOGYAKARTA',
      address: 'Kota Yogyakarta',
      avarage: '588,002',
      npsn: '20403174',
      rate: 4.903,
    }]

    return (
      <React.Fragment>
        <header className="bg-gray rounded m-3 h-56 py-4">
          <Navbar />
        </header>

        <section>
          <div className="
            grid
            grid-flow-col gap-4
            hp:gap-10 table:gap-20
            mx-10 hp:mx-10 laptop:mx-24
            grid-cols-1 tablet:grid-cols-2
          ">
            <div className="
              p-8
              z-50
              shadow-xl
              col-span-1
              rounded-lg
              bg-white
            ">
              <Text classText="font-medium mb-2">
                Mencari Sekolah
              </Text>
              <Input type="text" classWrap="border-gray border-4 p-2 rounded-lg" classInput="font-medium opacity-30 font-medium" placeholder="Ketikan Sekolahmu" />
            </div>
            <div className="
              p-8
              z-50
              bg-white
              shadow-xl
              col-span-12
              rounded-lg
            ">
              {(dataSchool || []).map(data => (
                <div
                  className="
                    px-4
                    mb-8
                    text-md
                    relative
                    text-primary
                    cursor-pointer
                    border-b-4 border-gray
                  "
                  key={data.id}
                >
                  <Image
                    classWrap="
                      absolute
                      right-8
                      inset-y-1/2
                    "
                    alt="arrow-down"
                    src={require('../../assets/icons/arrow-down.svg')}
                  />
                  <Text classText="font-medium">{data.schoolName}</Text>
                  <Text classText="
                    mb-8
                    text-sm
                    text-gray-200
                  ">
                    {data.address}
                  </Text>
                  <div className="
                    grid
                    grid-cols-3
                  ">
                    <Text classText="
                      mb-8
                      text-sm
                    ">
                      {`Rerata Nilai: ${data.avarage}`}
                    </Text>
                    <Text classText="
                      mb-8
                      text-sm
                    ">
                      {`NPSN: ${data.npsn}`}
                    </Text>
                    <StarRatings
                      rating={data.rate}
                      starDimension="20px"
                      starRatedColor="#FFE095"
                    />
                  </div>
                </div>
              ))}

              <Pagination />
            </div>
          </div>
          <div className="
            py-4
            mx-3
            h-96
            left-0
            right-0
            bg-gray
            absolute
            top-48
          " />
        </section>

        <Footer />
      </React.Fragment>
    )
  }
}

export default Review
