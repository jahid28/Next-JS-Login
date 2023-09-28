'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {FcGoogle} from 'react-icons/fc'

import { signIn,useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function Home() {

  const {data:session}=useSession()
  const router=useRouter()

  if(session){
    router.replace('/homePage')
    return null
  }

  return (
    <>

<h1>Login</h1>

<h2>Login with Google</h2>

<button onClick={()=>{
  signIn("google")
}} > <FcGoogle/> Login </button>

    </>
  )
}
