'use client'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '@/components/app.header';
import AppFooter from '@/components/app.footer';
import Container from 'react-bootstrap/Container';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container style={{ minHeight: 'calc(100vh - 106px)' }}>
          {children}
        </Container>
        <AppFooter />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}