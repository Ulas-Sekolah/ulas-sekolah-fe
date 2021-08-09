import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStore } from 'provider'
import { Image, Switch } from 'components/atoms'

export default function Navbar(): any {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false)
  const { drakMode } = useStore()
  const router = useRouter()
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
    <nav className={`
      flex
      shadow-sm
      transition
      py-3 px-10
      justify-between
      mx-5 hp:mx-5 tablet:mx-10 laptop:mx-24
      ${drakMode ? 'bg-gray-300' : 'bg-white'}
      ${navbarOpen ? 'rounded-3xl' : 'rounded-full'}`
    }>
      <div className='relative flex flex-wrap items-center justify-between bg-teal-500 w-full'>
        <div className='md:container md:px-4 md:mx-auto w-full flex flex-wrap items-center justify-between'>
          <div className={`${drakMode ? 'text-black' : 'text-primary'} transition w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`}>
            <a
              className='text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-primary'
              href='/'
            >
              Rating Sekolah
            </a>
            <button
              className='cursor-pointer px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image width='20px' height='20px' alt='bar-icon' src={navbarOpen ? '/assets/icons/close-bars.svg' : '/assets/icons/open-bars.svg'} />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className={`flex flex-col items-center lg:flex-row list-none lg:ml-auto transition ${drakMode ? 'text-black' : 'text-primary'}`}>
              {(menu || []).map((item, idx, arr) => (
                <li key={idx} className={`cursor-pointer flex items-center ${arr.length - 1 === idx ? '' : 'mr-10'} ${navbarOpen ? 'mb-2' : ''} ${router.asPath === item.name ? 'font-light' : 'font-extralight'}`}>
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
