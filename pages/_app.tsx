import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
<div>

<Header/>
  


            <Component {...pageProps} />
          

</div> 
  

  )
}

export default MyApp
