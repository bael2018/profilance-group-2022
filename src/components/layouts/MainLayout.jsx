import { Outlet } from "react-router-dom"
import { Navbar } from "../shared/Navbar"
import cls from '../../scss/components/_mainlayout.module.scss'
import { Notification } from "../shared/Notification"
import { AuthModal } from "../shared/AuthForm"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { EditModal } from "../shared/EditModal"

const MainLayout = () => {
    const { isModalActive } = useSelector(state => state.auth)

    useEffect(() => {
        if(isModalActive){
            window.document.body.style.overflow = 'hidden'
        }else{
            window.document.body.style.overflowY = 'scroll'
            window.document.body.style.overflowX = 'hidden'
        }
    } , [isModalActive])

    return (
        <>
            <Notification/>
            <AuthModal/>
            <EditModal/>    
            <Navbar/>
            <div className={cls.container}>
                <Outlet/>
            </div>
        </>
    )
}

export { MainLayout }