import React from 'react'
import Layout from '../components/Layout'
import Review from '../containers/pages/Review'

export default function Home() {
  return (
    <Layout title={`${process.env.appName} | Review Sekolah`}>
      <Review />
    </Layout>
  )
}
