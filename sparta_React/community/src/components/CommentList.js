import React from 'react';
import {Btn, Grid, Image, Text} from "../elements";
import Permit from '../shared/Permit';

const CommentList = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
}

export default CommentList;

const CommentItem = (props) => {

  const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
  return (
      <Grid is_between>
          <Grid is_between width="auto">
              <Image shape="circle"/>
              <Text bold>{user_name}</Text>
          </Grid>
          <Grid is_between margin="0px 4px;">
              <Text margin="0px 3%;">{contents}</Text>
              <Permit>
                <Btn mini text="삭제" width="40px"/>
              </Permit>
          </Grid>
      </Grid>
  )
}

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "mean0",
  user_id: "",
  post_id: 1,
  contents: "귀여운 고양이네요!",
}