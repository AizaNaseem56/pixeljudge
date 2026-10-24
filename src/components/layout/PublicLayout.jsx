import { Outlet } from 'react-router-dom'
import Navbar from '../landing/Navbar'
import Footer from '../landing/Footer'

function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default PublicLayout