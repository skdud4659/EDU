// PostList.js
import React from "react";
import {useSelector, useDispatch} from "react-redux";

import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";
import InfinityScroll from "../elements/InfinityScroll";
import {Grid, Btn} from "../elements";
import Permit from '../shared/Permit'


const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    const user_info = useSelector((state) => state.user.user);
    const is_loading = useSelector((state) => state.post.is_loading);
    const paging = useSelector((state) => state.post.paging);

    const {history} = props;
    
    React.useEffect(() => {

        if(post_list.length < 2){
             dispatch(postActions.getPostFB());
        }
       
    }, []);

    return (
      <React.Fragment>
        <Grid bg={"#EFF6FF"} padding="20px 0px" overflow>
          {/* <Post/> */}
          <InfinityScroll
            callNext={() => {
              dispatch(postActions.getPostFB(paging.next));
            }}
            is_next={paging.next ? true : false}
            loading={is_loading}
          >
            {post_list.map((p, idx) => {
              if (p.user_info.user_id === user_info?.uid) {
                return (
                  <Grid
                    bg="#ffffff"
                    margin="8px 0px"
                    key={p.id}
                    _onClick={() => {
                      history.push(`/post/${p.id}`);
                    }}
                  >
                    <Post key={p.id} {...p} is_me />
                  </Grid>
                );
              } else {
                return (
                  <Grid
                    key={p.id}
                    bg="#ffffff"
                    _onClick={() => {
                      history.push(`/post/${p.id}`);
                    }}
                  >
                    <Post {...p} />
                  </Grid>
                );
              }
            })}
          </InfinityScroll>
          <Permit>
        <Btn
          is_float
          text="+"
          _onClick={() => {
            history.push("/write");
          }}
        ></Btn>
      </Permit>
        </Grid>
      </React.Fragment>
    );
}

export default PostList;

