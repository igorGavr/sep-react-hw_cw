import {useLocation} from "react-router-dom";

const UserPostsPage = () => {
    const {state} = useLocation();
    console.log(state);
    return (
        <div>
            UserPostsPage
        </div>
    );
};

export {UserPostsPage};
