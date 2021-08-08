import React from 'react'
import Layout from 'components/Layout'

export default function About() {
  return (
    <Layout title={`${process.env.appName} | Tentang Rating Sekolah`}>
      <h1 className="font-bold text-5xl text-blue-600 ">About</h1>
    </Layout>
  )
}
