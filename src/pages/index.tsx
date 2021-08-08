import React from 'react'
import Layout from '../components/Layout'
import Homepage from '../containers/pages/Homepage'

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <Homepage />
    </Layout>
  )
}
