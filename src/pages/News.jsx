import { useState } from 'react'
import { NewsList } from '../components/shared/NewsList'
import { Search } from '../components/shared/Search'
import cls from '../scss/pages/_news.module.scss'

const News = () => {
    const [view , setView] = useState(false)

    return (
        <div className={cls.news}>
            <div className={cls.news_header}>
                <span 
                    onClick={() => setView(false)}
                    className={!view ? cls.news_header_active : ''}
                >
                    Список
                </span>
                <span 
                    onClick={() => setView(true)}
                    className={view ? cls.news_header_active : ''}
                >
                    Поиск
                </span>
            </div>

            <div className={cls.news_body}>
                {
                    view ?  <Search/> : <NewsList/>
                }
            </div>
        </div>
    )
}

export { News }