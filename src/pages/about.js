import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
    <Head>
      <title> Jack's About Page</title>
      </Head>
      <h1> About </h1>
      <p>
        This is about page for Jack
      </p>
      <Link href="/">Home</Link>
      </>
  )
}