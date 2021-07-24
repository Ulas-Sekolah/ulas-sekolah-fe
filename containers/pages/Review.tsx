import React from 'react'
import StarRatings from 'react-star-ratings'
import Link from 'next/link'
import { Image, Pagination, Text } from '../../components/atoms'
import { Navbar, Footer, Filter} from '../../components/organisms'

class Review extends React.Component {
  state = {
    dataSchool: [{
      id: 1,
      schoolName: 'SMK NEGERI 26 JAKARTA',
      address: 'Jakarta Timur',
      avarage: '525,782',
      npsn: '20103787',
      rate: 4.403,
      expand: false
    }, {
      id: 2,
      schoolName: 'SMAN 8 JAKARTA',
      address: 'Jakarta Selatan',
      avarage: '594,865',
      npsn: '20102568',
      rate: 5,
      expand: false
    }, {
      id: 3,
      schoolName: 'SMAN 5 SURABAYA',
      address: 'Kota Surabaya',
      avarage: '594,605',
      npsn: '20532248',
      rate: 4.103,
      expand: false
    }, {
      id: 4,
      schoolName: 'SMAS DIAN HARAPAN',
      address: 'Jakarta Barat',
      avarage: '589,811',
      npsn: '20104413',
      rate: 3.803,
      expand: false
    }, {
      id: 5,
      schoolName: 'SMAN 1 YOGYAKARTA',
      address: 'Kota Yogyakarta',
      avarage: '588,002',
      npsn: '20403174',
      rate: 4.903,
      expand: false
    }]
  }

  handleShowDetail = (id, idx) => {
    let schoolState = [...this.state.dataSchool]
    let schoolElement = schoolState.filter(school => school.id === id)

    schoolElement[0].expand = !schoolElement[0].expand
    schoolState[idx] = schoolElement[0]

    this.setState({
      dataSchool: schoolState
    })
  }

  render() {
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
              {(this.state.dataSchool || []).map((data, idx) => (
                <>
                  <div
                    className="px-4 text-md relative text-primary cursor-pointer hp:pb-8 laptop:pb-0 border-b-4 border-gray"
                    onClick={() => this.handleShowDetail(data.id, idx)}
                    key={data.id}
                  >
                    <Image
                      classWrap={`absolute inset-y-1/2 hp:right-4 tablet:right-8 transition transform ${data.expand ? '-rotate-180' : 'rotate-0'}`}
                      alt="arrow-down"
                      src={require('../../assets/icons/arrow-down.svg')}
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
                        {`Rerata Nilai: ${data.avarage}`}
                      </Text>
                      <Text classText="
                        text-sm
                        hp:mb-2 laptop:mb-8
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

                  <Link href="#">
                    <div className={`p-2 cursor-pointer text-center bg-blue-200 rounded-br-lg rounded-bl-lg transition transform duration-100 ${data.expand ? 'mb-8 opacity-1' : 'mb-0 opacity-0 translate-y-6'}`}>
                      <a className="text-white font-semibold">
                        Lihat Detail
                      </a>
                    </div>
                  </Link>
                </>
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
}

export default Review
