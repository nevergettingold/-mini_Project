import React from "react";
import styled from "styled-components";

import CommentList from "../components/CommentList";

const CardDetail = () => {
  return (
    <Container>
      <div className="detail-wrap">
        <h1>제목</h1>
        <div className="detail-image">
          <img
            src="https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/france/nice/NICE_0621_LPmobile.jpg"
            alt=""
          />
        </div>
        <div className="detail-contents">내용</div>
        <div className="detail-hot">
          <div className="like-button">관심버튼 관심 수 </div>
          <div className="comment-count">댓글 수</div>
        </div>
      </div>
      <CommentList />
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem 10rem;
  .detail-wrap {
    .detail-image {
    }
    .detail-contents {
      border: 1px solid #e2e2e2;
      border-radius: 0.5rem;
      min-height: 20em;
    }
    .detail-hot {
      margin: 1rem 0 2rem 0;
      display: flex;
    }
    .like-button {
      color: red;
    }
    .comment-count {
      margin-left: 1rem;
    }
  }
`;

export default CardDetail;
