import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
// import New from './pages/New/New'
import Edit from './pages/Edit/Edit'
import Nav from './components/Nav/Nav'

export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/controllers/edit/:id" element={<Edit/>}/>                                                                      
                {/* <Route path="/new" element={<New/>}/>                                                                   */}
                {/* <Route path="/edit" element={<Edit/>}/>                                                                    */}
            </Routes>
        </div>
    )
}