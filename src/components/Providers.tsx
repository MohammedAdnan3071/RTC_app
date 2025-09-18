'use client'

import { FC, ReactNode } from "react"
import { ToastBar, Toaster } from "react-hot-toast"

interface ProvidersProps{
    children:ReactNode
}



const Providers:FC<ProvidersProps> =( {children} ) =>{
    return <>
       <Toaster position="top-center" reverseOrder={false} />
        {children}
    </>
}


export default Providers