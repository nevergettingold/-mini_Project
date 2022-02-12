import React from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import CardSwiper from "../components/CardSwiper";

const MyPage = () => {
  return (
    <Container>
      <MyCards>
        <h1>나의 글</h1>
        <CardSwiper />
      </MyCards>
      <MyLikedCards>
        <h1>나의 관심 글</h1>
        <CardSwiper />
      </MyLikedCards>
    </Container>
  );
};

const Container = styled.div``;
const MyCards = styled.div``;
const MyLikedCards = styled.div``;

export default MyPage;
