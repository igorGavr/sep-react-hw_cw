import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect} from "react";

const UserDetailsPage = () => {
    const {id} = useParams();
    // const {state:{user}} = useLocation();
    const {state} = useLocation();
    // const id = params.id;
    // console.log(id);
    console.log(state)

    // useEffect(()=>{
    //
    // },[id,statr])
    // useEffect(()=>{
    //
    // },[state])

    return (
        <div >
            <Link to={'posts'} state={{...state}}>LinkToPosts</Link>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};
