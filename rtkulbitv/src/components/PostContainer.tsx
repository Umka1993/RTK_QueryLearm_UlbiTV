import React, {useEffect, useState} from 'react';
import {postsApi} from "../services/PostServices";
import PostItem from "./PostItem";
import {IPost} from "../types/types";

export const PostContainer = () => {
    const [limit, setLimit] = useState(100)

    const {data: posts, error, refetch} = postsApi.useFetchAllUsersQuery(limit, {
        // pollingInterval: 5000
    })
    const [createPost, {error: createError}] = postsApi.useCreatePostMutation()
    const [deletePost] = postsApi.useDeletePostMutation()
    const [updatePost] = postsApi.useUpdatePostMutation()

    useEffect(() => {
        // setTimeout( ()=>{
        //     setLimit(3)
        // }, 2000)
    }, [])
    const handleCreate = async ()=> {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            <button onClick={() => refetch()}>REFETCH</button>
            {error && <h1>Ошибка</h1>}
            {posts && posts.map(post =>
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>)}
        </div>
    );
};

