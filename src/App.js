import React from 'react';
// import './reset.css'
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Avatar from './components/Avatar/Avatar';
import ChatOnline from './components/ChatOnline/ChatOnline';
import Follow from './components/Follow/Follow';
import MessagesContainer from './components/Messages/MessagesContainer'
import Images from './components/Images/Images'
import Videos from './components/Videos/Videos'
import Friends from './components/Friends/Friends'
import PeopleContainer from './components/People/PeopleContainer';
import Music from './components/Music/Music'
import Footer from './components/Footer/Footer'

import { Routes, Route } from 'react-router-dom';







const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />

      <Navbar />

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/newsfeed' element={<Newsfeed />} />
          
          <Route path='/people' element={<PeopleContainer />} />

          <Route path='/dialogs/*' element={<MessagesContainer />} />

          <Route path='/Friends' element={<Friends />} />
          <Route path='/music' element={<Music />} />
          <Route path='/images' element={<Images />} />
          <Route path='/videos' element={<Videos />} />
        </Routes>

      </div>


      <Avatar />

      <ChatOnline />

      <Follow />

      <Footer />
    </div>
  );
}

export default App;
