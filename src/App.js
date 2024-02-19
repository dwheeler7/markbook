import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Nav from './components/Nav/Nav'

export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Main/>}/>                                                                   
            </Routes>
        </div>
    )
}