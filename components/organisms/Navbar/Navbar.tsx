import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Image, Switch } from '../../atoms'

export default function Navbar(): any {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const menu = [{
    name: '/',
    displayName: 'Beranda'
  }, {
    name: '/review',
    displayName: 'Cari Sekolah'
  }, {
    name: '/about',
    displayName: 'Tentang Kami'
  }, {
    name: '/help',
    displayName: 'Bantuan'
  }, {
    name: 'switch-btn',
    displayName: <Switch />,
  }]

  return (
    <nav className={`bg-white mx-24 mt-5 shadow-sm py-3 px-10 justify-between flex ${navbarOpen ? 'rounded-3xl' : 'rounded-full'}`}>
      <div className="relative flex flex-wrap items-center justify-between bg-teal-500 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-primary"
              href="#pablo"
            >
              Rating Sekolah
            </a>
            <button
              className="text-gray cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image width="20px" height="20px" alt="bar-icon" src={navbarOpen ? require('../../../assets/icons/close-bars.svg') : require('../../../assets/icons/open-bars.svg')} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {(menu || []).map((item, idx, arr) => (
                <li key={idx} className={`${arr.length - 1 === idx ? '' : 'mr-10'} ${navbarOpen ? 'mb-2' : ''} ${router.asPath === item.name ? "font-light" : "font-extralight"}`}>
                  {item.name !== 'switch-btn' ?
                    <Link href={item.name}>
                      {item.displayName}
                    </Link> : item.displayName
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
