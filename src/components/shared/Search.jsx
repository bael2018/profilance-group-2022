import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { visitors } from '../../api'
import cls from '../../scss/components/_search.module.scss'
import { useGetNewsQuery } from '../../store/query/newsApi'
import { toArray } from '../../utilities/objectToArray'
import { Loader } from '../elements/Loader'
import { NewsItem } from '../elements/NewsItem'

const Search = () => {
    const { isUser } = useSelector(state => state.auth)
    const { data , isLoading } = useGetNewsQuery()
    const [inputValue , setInputValue] = useState('')
    const [news , setNews] = useState([])

    useMemo(() => {
        if(isUser === visitors.viewer){
            const filteredArray = toArray(data).filter(item => item.isApproved === true)
            setNews(filteredArray)
        }else{
            setNews(toArray(data))
        }
    } , [isUser , data])

    useEffect(() => {
        const filteredArray = news.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
        setNews(filteredArray)
    } , [inputValue])

    return (
        <div className={cls.search}>
            <div className={cls.search_header}>
                <input 
                    type="text" 
                    value={inputValue}
                    placeholder='Введите название новости...'
                    onChange={e => setInputValue(e.target.value)}
                />
            </div>
            <div className={cls.search_body}>
                {
                    isLoading ? <Loader/> : (
                        news.length ? (
                            news.map(item => <NewsItem key={item.id} {...item}/>)
                        ) : (
                            <h3 style={{
                                textAlign: 'center',
                                width: '100%'
                            }}>Нету новостей</h3>
                        )
                    )
                }
            </div>
        </div>
    )
}

export { Search }