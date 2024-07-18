import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NetFlix from './pages/NetFlix'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked'

 
const App = () => {
  // const [{}, dispatch] = useStateValue()

  // useEffect(()=>{
  //     auth.onAuthStateChanged(authUser => {
  //       console.log('THE USER IS >>>', authUser)

  //       if(authUser){

  //         dispatch({
  //           type:'SET_USER',
  //           user:authUser
  //         })
  //       }else{
  //         dispatch({
  //           type:'SET_USER',
  //           user:null
  //         })
  //       }
  //     })
  // },[])
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<NetFlix/>}></Route>
        <Route exact path="/login" element= {<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path="/player" element={<Player/>}></Route>
        <Route exact path="/movies" element={<Movies/>}></Route>
        <Route exact path="/tv" element={<TVShows/>}></Route>
        <Route exact path='/mylist' element={<UserLiked/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

