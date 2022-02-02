import { useDispatch , useSelector } from 'react-redux'
import cls from '../../scss/components/_navbar.module.scss'
import { CustomLink } from '../elements/CustomLink'
import { clearUser, logoutSuccess, setEditModal, setModal } from '../../store/slices/newsSlice'
import { setNotification } from '../../store/slices/notificationSlice'
import { visitors } from '../../api'

const Navbar = () => {
    const { isLogged , isUser } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logoutBtn = () => {
        dispatch(setNotification({
            status: 'success',
            title: 'Вы вышли из аккаунта !',
            description: 'возращяйтесь скорее'
        }))
        dispatch(logoutSuccess())
        dispatch(clearUser())
    }

    return (
        <div className={cls.navbar}>
            <div className={cls.navbar_wrapper}>
                <CustomLink to={'/'}>
                    <img src="img/logo.svg" alt="navbarLogo" />
                </CustomLink>
                <CustomLink to={'/news'}>
                    Новости
                </CustomLink>
                <div>
                    {
                        isLogged ? (
                            <button onClick={logoutBtn}>
                                <span>Выйти</span>
                            </button>
                        ) : (
                            <button onClick={() => dispatch(setModal())}>
                                <span>Войти</span>
                            </button>
                        )
                    }
                    {
                        isUser === visitors.user && (
                            <button 
                                onClick={() => dispatch(setEditModal())}
                                style={{ marginLeft: '15px' }}
                            >
                                <span>Добавить</span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export { Navbar }