import { useDispatch, useSelector } from "react-redux"
import cls from '../../scss/components/_authmodal.module.scss'
import { VscChromeClose } from 'react-icons/vsc'
import { loginSuccess, setModal, setUser } from "../../store/slices/newsSlice"
import { useState } from "react"
import { setNotification } from "../../store/slices/notificationSlice"
import { auth , visitors } from "../../api"

const AuthModal = () => {
    const { isModalActive } = useSelector(state => state.auth)
    const [login , setLogin] = useState('')
    const [email , setEmail] = useState('')
    const dispatch = useDispatch()

    const closeModalBtn = () => {
        dispatch(setModal())
    }

    const setSuccessModal = () => {
        dispatch(setNotification({
            status: 'success',
            title: 'С возращением в News !',
            description: 'читайте новости дня '
        }))
    }

    const clearInputs = () => {
        setLogin('')
        setEmail('')
    }

    const successAuthorization = prop => {
        setSuccessModal()
        dispatch(loginSuccess())
        dispatch(setUser({
            user: prop,
            name: login
        }))
        closeModalBtn()
        clearInputs()
    }

    const submitFormHandler = e => {
        e.preventDefault()

        if(!login.trim().length && !email.trim().length){
            dispatch(setNotification({
                status: 'error',
                title: 'Пустые поля ввода!',
                description: 'заполните все поля ввода'
            }))
        }else if(login === auth.userLogin && email === auth.userPassword){
            successAuthorization(visitors.user)
        }else if(login === auth.adminlogin && email === auth.adminPassword){
            successAuthorization(visitors.admin)
        }else{
            dispatch(setNotification({
                status: 'error',
                title: 'Невалидные данные',
                description: 'повторите еще раз'
            }))
        }
    }

    return (
        <div className={isModalActive ? `${cls.modal} ${cls.modal_active}` : cls.modal}>
            <div className={cls.modal_wrapper}>
                <span className={cls.modal_wrapper_close} onClick={closeModalBtn}><VscChromeClose/></span>

                <div className={cls.modal_wrapper_body}>
                    <h4>Авторизация !</h4>
                    <form>
                        <input 
                            type="text" 
                            value={login}
                            placeholder="Введите свой логин"
                            onChange={e => setLogin(e.target.value)}
                        />
                        <input 
                            type="password" 
                            value={email}
                            placeholder="Введите свой пароль"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button type="submit" onClick={submitFormHandler}>ПОДТВЕРДИТЬ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { AuthModal }