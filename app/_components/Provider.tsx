"use client";
import { AppProgressBar as ProgressBar} from 'next-nprogress-bar'
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function Providers( {children}: {children: ReactNode}) {
    return (
        <>
        <Toaster richColors closeButton/>
        { children }
        <ProgressBar 
        color='#000'
        height='3px'
        options={{showSpinner: false }}
        shallowRouting/>
        </>
    )
}