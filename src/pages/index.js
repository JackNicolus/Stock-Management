import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title> Jack's Page</title>
      </Head>
      <h1> Jack's Page</h1>
      <p>
        This is a sample page for Pakin C.
      </p>
      <Link href="/about">About</Link>
      </>
  )
}