import Head from 'next/head'

export default function Layout(props) {
  return(
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="https://image.shutterstock.com/image-vector/initial-r-rr-icon-logo-600w-1628908060.jpg" />
      </Head>
      {props.children}
    </div>
  )
}
