import React from 'react';
import CommentList from '../components/CommentList';
import Post from '../components/Post';
import { Grid, Input, Btn } from '../elements';

const Detail = (props) => {
  return (
    <React.Fragment>
      <Post/>
      <Grid padding="5% 16px;">
        <Grid is_between>
          <Input placeholder="댓글 내용을 입력해주세요:)"/>
          <Grid width="auto">
            <Btn mini width="40px;" margin="0px 0px 0px 20%;" text="작성"/>
          </Grid>
        </Grid>
      </Grid>
      <CommentList />
    </React.Fragment>
  );
}

export default Detail;