import { useEffect, useState } from "react"
import cls from '../../scss/components/_newslist.module.scss'
import { useSelector } from "react-redux"
import { visitors } from "../../api"
import { useGetNewsQuery } from "../../store/query/newsApi"
import { toArray } from "../../utilities/objectToArray"
import { Loader } from "../elements/Loader"
import { NewsItem } from "../elements/NewsItem"

const NewsList = () => {
    const { isUser } = useSelector(state => state.auth)
    const { data , isLoading } = useGetNewsQuery()
    const [news , setNews] = useState([])

    useEffect(() => {
        if(isUser === visitors.viewer){
            const filteredArray = toArray(data).filter(item => item.isApproved === true)
            setNews(filteredArray)
        }else{
            setNews(toArray(data))
        }
    } , [isUser , data])
    
    return (
        <div className={cls.list}>
            {
                isLoading ? <Loader/> : (
                    news.length ? (
                        news.map(item => <NewsItem key={item.id} {...item}/>)
                    ) : (
                        <h2 className={cls.list_empty}>Новостей нет !</h2>
                    )
                )
            }
        </div>
    )
}

export { NewsList }