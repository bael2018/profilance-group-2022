import cls from '../../scss/components/_newsitem.module.scss'
import { BiTime } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { visitors } from '../../api'
import { useChangeNewsMutation, useDeleteNewsMutation } from '../../store/query/newsApi'

const NewsItem = ({ title , image , content , date , isApproved , id }) => {
    const { isUser } = useSelector(state => state.auth)
    const [ deleteNew ] = useDeleteNewsMutation()
    const [ changeNew ] = useChangeNewsMutation()

    const deleteNewBtn = () => {
        deleteNew({ id })
    }

    const approveNewBtn = () => {
        changeNew({ approve: true , id })
    }

    const disapproveNewBtn = () => {
        changeNew({ approve: false , id })
    }

    return (
        <div className={cls.item}>
            <div className={cls.item_header}>
                <img src={image} alt="newsImage" />
            </div>
            <div className={cls.item_body}>
                <span><BiTime/> {date}</span>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
            {
                isUser === visitors.admin && (
                    <div className={cls.item_footer}>
                        {
                            isApproved ? (
                                <span className={cls.item_footer_approved} onClick={disapproveNewBtn}>Одобрено</span>
                            ) : (
                                <span className={cls.item_footer_approve} onClick={approveNewBtn}>Одобрить</span>
                            )
                        }
                        <span className={cls.item_footer_delete} onClick={deleteNewBtn}>Удалить</span>
                    </div>
                )
            }
        </div>
    )
}

export { NewsItem }