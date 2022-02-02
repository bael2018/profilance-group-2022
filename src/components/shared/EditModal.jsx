import cls from '../../scss/components/_editmodal.module.scss'
import { useDispatch , useSelector } from 'react-redux'
import { VscChromeClose } from 'react-icons/vsc'
import { setEditModal } from '../../store/slices/newsSlice'
import { useState } from 'react'
import { setNotification } from '../../store/slices/notificationSlice'
import { useAddNewsMutation } from '../../store/query/newsApi'
import { getDate } from '../../utilities/date'

const EditModal = () => {
    const [addNews] = useAddNewsMutation()
    const { isEditModal } = useSelector(state => state.auth)
    const [content , setContent] = useState('')
    const [image , setImage] = useState('')
    const [title , setTitle] = useState('')
    const dispatch = useDispatch()

    const closeModalBtn = () => {
        dispatch(setEditModal())
    }

    const editBtnHandler = () => {
        if(!content.trim().length && !image.trim().length && !title.trim().length){
            dispatch(setNotification({
                status: 'error',
                title: 'Пустые поля ввода!',
                description: 'заполните все поля ввода'
            }))
        }else{
            dispatch(setNotification({
                status: 'success',
                title: 'Успешно добавлено !',
                description: 'читайте новости дня'
            }))
            const body = {
                title,
                content,
                image,
                isApproved: false,
                date: getDate()
            }
            addNews({ body })
            closeModalBtn()
            setContent('')
            setImage('')
            setTitle('')
        }
    }

    return (
        <div className={ isEditModal ? `${cls.edit} ${cls.edit_active}` : cls.edit }>
            <div className={cls.edit_wrapper}>
                <span className={cls.edit_wrapper_close} onClick={closeModalBtn}><VscChromeClose/></span>
                <h3>Добавляйте новости !</h3>
                <div>
                    <input 
                        value={image}
                        type="text" 
                        placeholder='Ссылка на картинку новости'
                        onChange={e => setImage(e.target.value)}
                    />
                    <input 
                        value={title}
                        type="text" 
                        placeholder='Название новости'
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        value={content}
                        placeholder='Описание новости' 
                        onChange={e => setContent(e.target.value)}
                    />
                    <button onClick={editBtnHandler}>ПОДТВЕРДИТЬ</button>
                </div>
            </div>
        </div>
    )
}

export { EditModal }