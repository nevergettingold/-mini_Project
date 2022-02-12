import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import instance from "../shared/Request";

const Card = (props) => {
  const { best_list, normal_list } = props;
  console.log(best_list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <img src={best_list.image} alt="" onClick={() => navigate("/post/:id")} />
      <CardInfo>
        제목: {best_list.title}
        <br />
        닉네임: {best_list.nickname}
        <br />
        내용: {best_list.content} <br />
        날짜: {best_list.insert_dt}
      </CardInfo>
    </div>
  );
};

const CardInfo = styled.div`
  /* text-align: left; */
`;

export default Card;
