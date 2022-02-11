import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

/* Components */
import {Header, Banner} from '../components/component'

/* CSS */
import '../css/App.css';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='wrap'>
        <Header/>
        <Banner/>
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/postwrite' element={<PostWrite />} />
          <Route path='/postwrite/:id' element={<PostWrite />} />
          <Route path='/notification' element={<Notification />}/>
          <Route path="/*" element={<NotFound />}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
