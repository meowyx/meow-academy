import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
    <Hero/>
  </div>
  )
}

export default Home
