import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './component/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mohamme Page </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Home Page </h1>
    </div>
  )
}
