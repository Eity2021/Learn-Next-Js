import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/component/header'
import Footer from '@/component/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main> 
       <Header></Header>
        <h1>this is the Home page</h1>
        <Footer></Footer>
    </main>
  )
}
