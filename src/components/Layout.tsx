import Head from 'next/head'
import { useStore } from 'provider'

export default function Layout(props) {
  const { drakMode } = useStore()

  return(
    <div className={`p-3 transition ${drakMode ? 'bg-gray-300' : 'bg-white'}`}>
      <Head>
        <title data-testid='titleLayout'>{props.title}</title>
        <link rel='icon' href='https://image.shutterstock.com/image-vector/initial-r-rr-icon-logo-600w-1628908060.jpg' />
      </Head>
      {props.children}
    </div>
  )
}
