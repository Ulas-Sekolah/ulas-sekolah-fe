import React from 'react'
import { Button, Image, Input } from '../../components/atoms'
import { Navbar } from '../../components/organisms'

let staticSchool: any[] = [{
  id: 1,
  name: 'SMK Negri 26 Jakarta',
  address: 'Jl. Balai Pustaka Baru I, Rawamangun',
  imageUrl: require('../../assets/images/images-review/school1.png'),
}, {
  id: 2,
  name: '',
  address: '',
  imageUrl: require('../../assets/images/images-review/school2.png'),
}, {
  id: 3,
  name: '',
  address: '',
  imageUrl: require('../../assets/images/images-review/school3.png'),
}, {
  id: 4,
  name: '',
  address: '',
  imageUrl: require('../../assets/images/images-review/school4.png'),
}, {
  id: 5,
  name: '',
  address: '',
  imageUrl: require('../../assets/images/images-review/school5.png'),
}, {
  id: 6,
  name: '',
  address: '',
  imageUrl: require('../../assets/images/images-review/school6.png'),
}]
class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="bg-gray rounded m-3 py-4">
          <div className="bg-white mx-24 mt-5 shadow-sm rounded-full py-3 px-10 justify-between flex">
            <Navbar />
          </div>
          <div className="grid grid-cols-2 gap-20 mx-24 mt-36">
            <div className="mb-36">
              <h1 className="text-6xl font-semibold leading-snug text-primary">Jelajahi semua sekolah di Indonesia</h1>
              <p className="text-lg font-extralight leading-relaxed mt-7 tracking-wider text-primary">Cari sekolah yang kamu minati dan<br />dapatkan info rating, jurusan, ekskul dan fasilitas<br />sekolah favoritmu.</p>
              <div className="shadow-sm w-full rounded-full h-14 mt-10 bg-white pl-10 pr-2.5 relative grid-cols-12 grid gap-4 items-center">
                <Image src={require('../../assets/icons/message.svg')} alt="Message Image" height="20px" width="20px" classWarp="col-start-1 col-end-2 animate-pulse" />
                <Input type="text" classWarp="col-start-2 col-end-10" classInput="h-14 focus:outline-none font-extralight w-full" placeholder="Masukan emailmu" />
                <Button
                  classWarp="transition duration-300 col-start-10 col-end-13 rounded-full bg-primary h-10 w-full hover:ring-4 ring-gray-400"
                  classButton="focus:outline-none text-white text-center h-10 w-full text-lg font-medium"
                >
                  <span>Ulasan</span>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute border-blue-100 border-2 h-96 w-60 right-0 rounded" />
              <Image src={require('../../assets/images/banner-header.png')} alt="banner" width="600" height="700" classImage="absolute p-10 right-0" />
            </div>
          </div>
        </header>

        <section className="mt-96">
          <div className="grid grid-cols-2 gap-20 mx-24">
            <div className="relative">
              <Image src={require('../../assets/images/rating-school.png')} alt="Rating" width="400px" classWarp="absolute z-10 rounded-xl ml-8 shadow-xl" classImage="shadow-xl rounded-lg" />
              <div className="absolute bg-gray-200 rounded-lg w-400 h-292 transform rotate-12 ml-8" />
              <div className="absolute bg-gray-100 rounded-lg w-400 h-292 transform rotate-6 ml-8" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold leading-snug text-primary">Mengetahui Rating<br />Sekolah dengan mudah</h1>
              <p className="text-lg font-extralight leading-relaxed mt-7 tracking-wider text-primary">Kamu bingung memilih sekolah untuk melanjutkan<br />studi kamu?<br />Dengan Rating Sekolah, kamu dapat mengetahui sekolah terbaik untuk kamu berdasarkan pengalaman dari alumni atau siswa di sekolah tersebut.</p>
            </div>
          </div>
        </section>

        <section className="mt-96">
          <div className="grid grid-cols-2 gap-20 mx-24">
            <div>
              <h1 className="text-5xl font-semibold leading-snug text-primary">Mencari jurusan sesuai dengan passionmu</h1>
              <p className="text-lg font-extralight leading-relaxed mt-7 tracking-wider text-primary">Cari sekolah favorit terbaik di Indonesia untuk<br />jurusan favoritmu dengan mudah dengan menggunakan<br />Rating Sekolah.</p>
            </div>
            <div className="relative">
              <Image src={require('../../assets/images/your-passion.png')} alt="Rating" width="400px" classWarp="absolute z-10 rounded-xl mr-8 right-0 shadow-xl" classImage="shadow-xl rounded-lg" />
              <div className="absolute bg-gray-200 rounded-lg w-400 h-296 transform mr-8 right-0 -rotate-12" />
              <div className="absolute bg-gray-100 rounded-lg w-400 h-296 transform mr-8 right-0 -rotate-6" />
            </div>
          </div>
        </section>

        <section className="mt-96">
          <div className="grid grid-cols-2 gap-20 mx-24">
            <div className="relative">
              <Image src={require('../../assets/images/your-extracurricular.png')} alt="Rating" width="400px" classWarp="absolute z-10 rounded-xl ml-8 shadow-xl" classImage="shadow-xl rounded-lg" />
              <div className="absolute bg-gray-200 rounded-lg w-400 h-268 transform rotate-12 ml-8" />
              <div className="absolute bg-gray-100 rounded-lg w-400 h-268 transform rotate-6 ml-8" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold leading-snug text-primary">Mengembangkan hobi di sekolah favoritmu</h1>
              <p className="text-lg font-extralight leading-relaxed mt-7 tracking-wider text-primary">Pilih sekolah dengan ekskul sesuai minat kamu dan cari<br />teman sehobi di sekolah favorit kamu!</p>
            </div>
          </div>
        </section>

        <section className="mt-96">
          <div className="grid grid-cols-2 gap-20 mx-24">
            <div>
              <h1 className="text-5xl font-semibold leading-snug text-primary">Mendapatkan fasilitas yang baik dan lengkap</h1>
              <p className="text-lg font-extralight leading-relaxed mt-7 tracking-wider text-primary">Dengan mendapatkan fasilitas yang layak dan lengkap<br />pasti kamu akan lebih semangat dalam proses belajar.</p>
            </div>
            <div className="relative">
              <Image src={require('../../assets/images/facilities.png')} alt="Rating" width="400px" classWarp="absolute z-10 rounded-xl mr-8 right-0 shadow-xl" classImage="shadow-xl rounded-lg" />
              <div className="absolute bg-gray-200 rounded-lg w-400 h-268 transform mr-8 right-0 -rotate-12" />
              <div className="absolute bg-gray-100 rounded-lg w-400 h-268 transform mr-8 right-0 -rotate-6" />
            </div>
          </div>
        </section>

        <section className="mt-96">
          <div className="mx-24">
            <h1 className="text-5xl font-semibold leading-snug text-primary text-center">Sekolah paling banyak diulas</h1>
            <div className="grid grid-cols-3 gap-0.5 m-28">
              {(staticSchool || []).map((dataSchool) => (
                <div key={dataSchool.id}>
                  <Image src={dataSchool.imageUrl} alt="Image School"  width="395" height="345"/>
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Homepage
