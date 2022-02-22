import React from 'react';
import {PostContainer} from "./components/PostContainer";
import {PostContainer2} from "./components/PostContainer2";
import s from "./appStyle.module.scss";
import {postsApi} from "./services/PostServices";


function App() {
    const {isLoading} = postsApi.useFetchAllUsersQuery(0)

    return (
        <div className={s.app}>
            {isLoading && <h1>Идет загрузка...</h1>}
            <PostContainer/>
            <PostContainer2/>
        </div>
    );
}

export default App;