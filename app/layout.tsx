import type { Metadata } from 'next'
import './globals.css'
//import Providers from './_components/Provider'

export const metadata: Metadata = {
  title: 'Mélaine DEWITTE',
  description: 'Développeuse passionnée',
}

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        {children}
 
      </body>
    </html>
  )
}

export default RootLayout;