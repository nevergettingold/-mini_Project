import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  // const { post_id } = props;
  // const comment_list = useSelector((state) => state.comment.list);

  // React.useEffect(() => {
  //   if (!comment_list[post_id]) {
  //     dispatch(commentActions.getCommentFB(post_id));
  //   }
  // }, []);

  // if (!comment_list[post_id] || !post_id) {
  //   return null;
  // }

  return (
    <React.Fragment>
      {/* <Grid padding="16px">
        {comment_list[post_id].map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })}
      </Grid> */}
      <div>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </React.Fragment>
  );
};

// CommentList.defaultProps = {
//   post_id: null,
// };

export default CommentList;

const CommentItem = (props) => {
  const { user_name, user_id, post_id, contents, insert_dt } = props;
  return (
    <Container>
      <div className="comment-wrap">
        <div className="comment-list">
          <div className="comment-nickname">{user_name}</div>
          <div className="comment-contents">{contents}</div>
          <div className="comment-created">{insert_dt}</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .comment-wrap {
    min-height: 3rem;
    .comment-list {
      display: flex;
      .comment-nickname {
        min-width: 10rem;
      }
      .comment-contents {
        min-width: 40rem;
      }
      .comment-created {
        min-width: 10rme;
      }
    }
  }
`;

CommentItem.defaultProps = {
  user_name: "닉네임 테스트",
  user_id: "",
  post_id: 1,
  contents: "댓글 테스트",
  insert_dt: "2022-02-12 19:00:00",
};
