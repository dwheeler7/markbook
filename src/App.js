import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import New from './pages/New/New'
import Edit from './pages/Edit/Edit'
import Nav from './components/Nav/Nav'
import styles from './App.module.scss'

export default function App(){
    return (
        <div className={styles.layout}>
            <Nav/>       
            <div className={styles.container}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/new" element={<New/>}/>
                    <Route path="/controllers/:id/edit" element={<Edit/>}/>                                                                                                                   
                </Routes>
            </div>
        </div>
    )
}