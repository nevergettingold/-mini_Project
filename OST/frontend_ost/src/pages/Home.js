import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CardList from "../components/CardList";
import CardSwiper from "../components/CardSwiper";

import { actionCreators as postActions } from "../redux/modules/post";

const Home = (props) => {
  const post_list = useSelector((state) => state.post.post_list);
  console.log(post_list);

  return (
    <Container>
      <h2>
        이번 주의 <span style={{ fontSize: "30px" }}>BEST</span> 관심
      </h2>
      <CardSwiper post_list={post_list} />
      <h2 style={{ margin: "30px 0" }}>다른 분들의 실시간은?</h2>
      <CardList post_list={post_list} />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
