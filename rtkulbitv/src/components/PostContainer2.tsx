import React from 'react';
import {postsApi} from "../services/PostServices";
import PostItem from "./PostItem";

export const PostContainer2 = () => {
    const {data: posts, error} = postsApi.useFetchAllUsersQuery(100)
    console.log(posts)
    return (
        <div>
            {/*{error && <h1>Ошибка</h1>}*/}
            {/*{posts && posts.map(post =>*/}
            {/*    <PostItem key={post.id} post={post}/>)}*/}
        </div>
    );
};

