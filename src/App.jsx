import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layouts/MainLayout'
import { Error } from './pages/404';
import { Main } from './pages/Main'
import { News } from './pages/News';
import cls from './scss/style.module.scss'

const App = () => {
    return (
        <div className={cls.root}>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='*' element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export { App }