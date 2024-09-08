import * as React from "react"
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { PiPlantDuotone } from "react-icons/pi";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/")
    }
  }, [isLoaded])

  if (!isLoaded) return <p className="flex justify-center items-center font-lato text-4xl font-bold h-screen mt-48 text-customLunarGreen">Blooming... <PiPlantDuotone /></p>

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
