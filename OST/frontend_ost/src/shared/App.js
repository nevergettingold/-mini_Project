import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

//Components
import { Home, MyPage, CardDetail, NotFound } from "../pages/page";
import { Header, Banner } from "../components/component";

//CSS
import "../css/App.css";

import { actionCreators as postActions } from "../redux/modules/post";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);
  return (
    <div className="App">
      <div className="wrap" style={{ width: "1280px", margin: "0 auto" }}>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/post/:id" element={<CardDetail />} />
          {/*
          <Route path='/signup' element={<Signup />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/postwrite' element={<PostWrite />} />
          <Route path='/postwrite/:id' element={<PostWrite />} />
          <Route path='/notification' element={<Notification />}/> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
