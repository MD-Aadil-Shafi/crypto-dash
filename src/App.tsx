import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import {  Routes, Route, } from 'react-router-dom'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import Info from './pages/Info'
import Setting from './pages/Setting'
import { AnimatePresence } from "framer-motion";


const App = () => {

  return (
   
      <Layout>
        <AnimatePresence mode="wait">
          <Routes > 
            <Route index path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/settings' element={<Setting/>}/>
          </Routes>
        </AnimatePresence>
      </Layout>

  );
};

export default App