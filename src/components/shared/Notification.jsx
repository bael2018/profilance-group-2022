import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import cls from '../../scss/components/_notification.module.scss'
import { clearNotification } from '../../store/slices/notificationSlice'

const Notification = () => {
    const { status , title , description , isActive } = useSelector(state => state.notify)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearNotification())
        }, 3000);
    } , [isActive])
    
    return (
        <div 
            className={ isActive ? `${cls.notification } ${cls.notification_active}` : cls.notification }
            style={{
                color: status === 'success' ? '#00ce00' : status === 'error' ? 'red' : 'grey',
                border: status === 'success' ? '2px solid #00ce00' : status === 'error' ? '2px solid red' : 'none'
            }}
        >
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export { Notification }