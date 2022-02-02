import { useSelector } from 'react-redux'
import cls from '../scss/pages/_main.module.scss'

const Main = () => {
    const { userName } = useSelector(state => state.auth)

    return (
        <div className={cls.main}>
            <h3>Привет <span>{userName}</span> !</h3>
        </div>
    )
}

export { Main }