import React from 'react'
import { Button, Image, Input } from '../../components/atoms'
import { Navbar } from '../../components/organisms'

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="bg-gray rounded m-3 py-4">
          <div className="bg-white mx-24 mt-5 shadow-sm rounded-full py-3 px-10 justify-between flex">
            <Navbar />
          </div>
          <div className="grid grid-cols-2 gap-20 mx-24 mt-32">
            <div className="mb-48">
              <h1 className="text-6xl font-medium leading-tight text-primary">Jelajahi semua sekolah di Indonesia</h1>
              <p className="text-xl font-extralight leading-relaxed mt-7 tracking-wider text-primary">Cari sekolah yang kamu minati dan dapatkan info rating, jurusan, ekskul dan fasilitas sekolah favoritmu.</p>
              <div className="shadow-sm w-full rounded-full h-14 mt-10 bg-white pl-10 pr-2.5 relative grid-cols-12 grid gap-4 items-center">
                <Image src={require('../../assets/icons/message.svg')} alt="Message Image" height="20px" width="20px" classWarp="col-start-1 col-end-2 animate-pulse" />
                <Input type="text" classWarp="col-start-2 col-end-10" classInput="h-14 focus:outline-none font-extralight w-full" placeholder="Masukan emailmu" />
                <Button
                  classWarp="transition duration-300 col-start-10 col-end-13 rounded-full bg-primary h-10 w-full hover:ring-4 ring-gray-300"
                  classButton="focus:outline-none text-white text-center h-10 w-full text-lg font-medium"
                >
                  <span>Ulasan</span>
                </Button>
              </div>
            </div>
            <div>

            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Homepage
