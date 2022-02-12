import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";

import OthersList from "./OthersList";

const CardList = (props) => {
  const { post_list } = props;
  const normal_list = props.post_list.normal_list;
  console.log(normal_list);

  return (
    <List>
      <ListHeader>
        <Category style={{ width: "100px" }}>닉네임</Category>
        <Category style={{ width: "100px" }}>제목</Category>
        <Category style={{ width: "840px" }}>내용</Category>
        <Category style={{ width: "100px" }}>관심 수</Category>
        <Category style={{ width: "100px" }}>날짜 </Category>
      </ListHeader>
      {[...normal_list].map((list, idx) => {
        return <OthersList key={idx} normal_list={list} />;
      })}
    </List>
  );
};

const List = styled.div``;

const ListHeader = styled.div`
  padding: 15px;
  border-bottom: 1px solid green;
  justify-content: flex-start;
`;

const Category = styled.div`
  padding-left: 1px;
  display: inline-block;
`;

export default CardList;
