import '@/styles/globals.css'
import '@/styles/navigation.scss'
import '@/styles/topslider.scss'
import '@/styles/videocontent.scss'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
