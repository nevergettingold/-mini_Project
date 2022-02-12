import React from "react";
import styled from "styled-components";

const OthersList = (props) => {
  const { normal_list } = props;
  console.log("노말받았다!", normal_list);
  return (
    <List>
      <Category style={{ width: "7rem" }}>{normal_list.nickname}</Category>
      <Category style={{ width: "7rem" }}>{normal_list.title}</Category>
      <Category style={{ width: "52rem" }}>{normal_list.content}</Category>
      <Category style={{ width: "6rem" }}>{normal_list.likeCount}</Category>
      <Category style={{ width: "6rem" }}>{normal_list.insert_dt}</Category>
    </List>
  );
};

const List = styled.li`
  border: 1px solid #e2e2e2;
  justify-content: flex-start;
  padding: 15px;
`;

// const ListHeader = styled.div`
//   padding: 15px;
//   border-bottom: 1px solid green;
//   justify-content: flex-start;
// `;

const Category = styled.div`
  display: inline-block;
`;

export default OthersList;
