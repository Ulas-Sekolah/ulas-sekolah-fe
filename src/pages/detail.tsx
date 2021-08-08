import React from 'react'
import Layout from '../components/Layout'
import Detail from '../containers/pages/Detail'

export default function Home() {
  return (
    <Layout title={`${process.env.appName} | Detail Sekolah`}>
      <Detail />
    </Layout>
  )
}
