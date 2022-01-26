import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {userService} from "../../services";
import {Post} from "../../components";

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getPostsById(id).then(value => setPosts(value))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};
