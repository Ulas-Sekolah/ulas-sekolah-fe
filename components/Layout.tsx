import Head from 'next/head'

export default function Layout(props) {
  return(
    <div>
      <Head>
        <title data-testid="titleLayout">{props.title}</title>
        <span data-testid="text-content">Text Content</span>
        <div className="foo">bar</div>
        <link rel="icon" href="https://image.shutterstock.com/image-vector/initial-r-rr-icon-logo-600w-1628908060.jpg" />
      </Head>
      {props.children}
    </div>
  )
}
