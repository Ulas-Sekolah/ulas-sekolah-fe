import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Switch } from '../../atoms'

export default function Navbar(): any {
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
    <React.Fragment>
      <div>
        <h1>Rating Sekolah</h1>
      </div>
      <div>
        <ul className="flex">
          {(menu || []).map((item, idx, arr) => (
            <li key={idx} className={`${arr.length - 1 === idx ? '' : 'mr-10'} ${router.asPath === item.name ? "font-light" : "font-extralight"}`}>
              {item.name !== 'switch-btn' ?
                <Link href={item.name}>
                  {item.displayName}
                </Link> : item.displayName
              }
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}
