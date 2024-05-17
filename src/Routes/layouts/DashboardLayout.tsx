import * as React from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function DashboardLayout () {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    React.useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/")
        }
    }, [isLoaded])

    if (!isLoaded) return "Loading..."

    return (<>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}