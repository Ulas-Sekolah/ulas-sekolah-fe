import React from 'react'
import { Button, Image, Input } from 'components/atoms'
import { Navbar, Footer } from 'components/organisms'
import sections from 'constant/section-home.json'
import { useStore, useWindowSize } from 'provider'

const staticSchool: any[] = [{
  id: 1,
  name: 'SMK Negri 26 Jakarta',
  address: 'Jl. Balai Pustaka Baru I, Rawamangun',
  imageUrl: '/assets/images/images-review/school1.png',
}, {
  id: 2,
  name: '',
  address: '',
  imageUrl: '/assets/images/images-review/school2.png',
}, {
  id: 3,
  name: 'Al-Azhar',
  address: '',
  imageUrl: '/assets/images/images-review/school3.png',
}, {
  id: 4,
  name: 'SMA Negeri Surabaya',
  address: '',
  imageUrl: '/assets/images/images-review/school4.png',
}, {
  id: 5,
  name: 'SMA Negeri 3 Yogyakarta',
  address: '',
  imageUrl: '/assets/images/images-review/school5.png',
}, {
  id: 6,
  name: 'SMA Negeri 8 Jakarta',
  address: '',
  imageUrl: '/assets/images/images-review/school6.png',
}]

export default function Homepage() {
  const { drakMode } = useStore()
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <React.Fragment>
      <header className={`${drakMode ? 'bg-black' : 'bg-gray'} transition rounded py-4`}>
        <Navbar />
        <div className='
          mx-10 hp:mx-10 laptop:mx-24
          mt-12 hp:mt-12 laptop:mt-36
          gap-10 hp:gap-10 laptop:gap-20
          grid grid-cols-1 hp:grid-cols-1 laptop:grid-cols-2
        '>
          <div className='hp:mb-20 laptop:mb-48'>
            <h1 className={`
              transition
              leading-snug
              font-semibold
              m-auto tablet: m-0
              tablet:w-3/4 laptop:w-full
              ${drakMode ? 'text-white' : 'text-primary'}
              text-3xl hp:text-3xl tablet:text-4xl laptop:text-6xl
              text-center hp:text-center tablet:text-center laptop:text-left
            `}>
              Jelajahi semua sekolah di Indonesia
            </h1>
            <p className={`
              transition
              tracking-wider
              font-extralight
              leading-relaxed
              m-auto tablet: m-0
              tablet:w-3/4 laptop:w-full
              mt-3 hp:mt-3 tablet:mt-5 laptop:mt-7
              text-sm hp:text-sm tablet:text-md laptop:text-lg
              ${drakMode ? 'text-white' : 'text-primary'}
              text-center hp:text-center tablet:text-center laptop:text-left
            `}>
              Cari sekolah yang kamu minati dan dapatkan info rating, jurusan, ekskul dan fasilitas sekolah favoritmu.
            </p>
            <div className={`
              grid
              pr-2.5
              relative
              shadow-sm
              transition
              rounded-full
              grid-cols-12
              items-center
              h-10 laptop:h-14
              pl-5 laptop:pl-10
              gap-2 tablet:gap-4
              m-auto tablet: m-0
              tablet:w-3/4 laptop:w-full
              mt-5 hp:mt-5 tablet:mt-7 laptop:mt-10
              ${drakMode ? 'bg-white' : 'bg-white'}
            `}>
              <Image
                src='/assets/icons/message.svg'
                alt='Message Image'
                classWrap='
                  w-4 lg:w-5
                  h-4 lg:h-5
                  col-end-2
                  col-start-1
                  animate-pulse
                '
                height={20}
                width={20}
              />
              <Input
                type='text'
                classWrap='
                  col-start-2
                  col-end-10
                '
                classInput={`
                  w-full
                  transition
                  font-extralight
                  h-10 laptop:h-14
                  text-xs tablet:text-md laptop:text-lg
                  ${drakMode ? 'bg-white placeholder-black' : 'bg-white'}
                `}
                placeholder='Masukan emailmu'
              />
              <Button
                onClick={() => null}
                classWrap={`
                  w-full
                  transition
                  col-end-13
                  h-7 lg:h-10
                  duration-300
                  col-start-10
                  rounded-full
                  hover:ring-4
                  ${drakMode ? 'bg-black ring-gray-700' : 'bg-primary ring-gray-300'}
                `}
                classButton={`
                  w-full
                  transition
                  text-white
                  text-center
                  font-medium
                  h-7 laptop:h-10
                  text-xs hp:text-xs tablet:text-sm laptop:text-lg
                `}
              >
                <span>Ulasan</span>
              </Button>
            </div>
          </div>
          <div className='
            relative
            hp:hidden laptop:block
          '>
            <div className={`${drakMode ? 'border-white' : 'border-blue-100'} absolute border-2 h-96 w-60 right-0 rounded`} />
            <Image src='/assets/images/banner-header.png' alt='banner' width={450} height={600} layout='fixed' classWrap='absolute top-16 right-16' classImage={`${drakMode ? 'border-blue-100 border-2' : ''} absolute p-10 right-0`} />
          </div>
        </div>
      </header>

      {(sections || []).map((section, idx) => (
        <section
          key={idx}
          className='mt-24 tablet:mt-48 laptop:mt-96'
        >
          <div className={`
            grid
            hp:gap-10 table:gap-20
            mx-10 hp:mx-10 laptop:mx-24
            grid-cols-1 tablet:grid-cols-2
            ${idx % 2 !== 0 ? 'tablet:flex tablet:flex-row-reverse justify-between' : ''}
          `}>
            <div className={`relative ${idx % 2 !== 0 ? 'tablet:flex tablet:justify-end tablet:w-2/4' : ''}`}>
              <Image
                src={section.imageUrl}
                alt='Rating'
                width={isMobile ? 'auto' : 400}
                height={isMobile ? 'auto' : 300}
                layout={isMobile ? 'responsive' : 'fixed'}
                classWrap='
                  laptop:absolute
                  z-10
                  rounded-xl
                  laptop:ml-8
                  laptop:shadow-xl
                '
                classImage='
                  shadow-xl
                  rounded-lg
                  hp:mx-auto
                '
              />
              <div className={`absolute rounded-lg w-400 h-300 transform ${drakMode ? 'bg-gray-300' : 'bg-gray-200'} ${idx % 2 !== 0 ? '-rotate-12' : 'rotate-12'}  ml-8 hidden tablet:hidden laptop:block`} />
              <div className={`absolute rounded-lg w-400 h-300 transform ${drakMode ? 'bg-gray-200' : 'bg-gray-100'} ${idx % 2 !== 0 ? '-rotate-6' : 'rotate-6'}  ml-8 hidden tablet:hidden laptop:block`} />
            </div>
            <div className={`${idx % 2 !== 0 ? 'tablet:w-2/4' : ''}`}>
              <h1 className={`
                leading-snug
                font-semibold
                hp:mt-10 tablet:mt-0
                text-center tablet:text-left
                text-3xl tablet:text-2xl laptop:text-4xl
                ${drakMode ? 'text-white' : 'text-primary'}
              `}>
                {section.title}
              </h1>
              <p className={`
                mt-7
                font-extralight
                leading-relaxed
                tracking-wider
                text-center tablet:text-left
                text-sm tablet:text-md laptop:text-lg
                ${drakMode ? 'text-white' : 'text-primary'}
              `}>
                {section.desc}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className='
        mt-24 tablet:mt-48 laptop:mt-96
      '>
        <div className='
          mx-10 hp:mx-10 laptop:mx-24
        '>
          <h1 className={`
            hp:mt-10 tablet:mt-0
            font-semibold leading-snug text-center
            text-3xl tablet:text-2xl laptop:text-4xl
            ${drakMode ? 'text-white' : 'text-primary'}
          `}>
            Sekolah paling banyak diulas
          </h1>
          <div className='grid grid-cols-2 tablet:grid-cols-3 gap-0.5 hp:mt-10 laptop:m-28 rounded-lg'>
            {(staticSchool || []).map((dataSchool) => (
              <div key={dataSchool.id} className='cursor-pointer relative'>
                <div className='z-10 absolute w-full h-full transition ease-in-out duration-300 bg-gradient-to-t from-primary-100 hover:from-primary via-primary-100 hover:via-transparent to-primary-100 hover:to-transparent p-3 bottom-0 transition opacity-0 hover:opacity-100'>
                  <div className='relative w-full h-full bg-primary-100 opacity-100'>
                    <p className='absolute bottom-0 hp:bottom-0 laptop:bottom-6 text-white font-medium text-xs tablet:text-lg'>{dataSchool.name}</p>
                    <p className='absolute bottom-0 text-white font-extralight hidden tablet:block'>{dataSchool.address}</p>
                  </div>
                </div>
                <Image src={dataSchool.imageUrl} alt='Image School' layout='responsive' />
              </div>
            ))}
          </div>
        </div>
      </section>
       
      <Footer />
    </React.Fragment>
  )
}
