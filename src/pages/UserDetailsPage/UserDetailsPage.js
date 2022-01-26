import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../services";
import {UserDetails} from "../../components";

const UserDetailsPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            userService.getById(id).then(value => setUser(value))
            return
        }
        setUser(state)
    }, [id])

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {UserDetailsPage};
