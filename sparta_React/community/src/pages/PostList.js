import React from 'react';
import Post from '../components/Post';
import Permit from '../shared/Permit';
import {Btn} from '../elements';

import { history } from "../redux/configStore";
import {useSelector, useDispatch} from 'react-redux';

import {actionCreators as postActions} from '../redux/modules/post';


const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  },[])

  return (
    <React.Fragment>
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p}/>
      })}
        <Btn
          is_float
          text="+"
          _onClick={() => {
            history.push('/write')
          }}></Btn>
    </React.Fragment>
  );
}

export default PostList;