import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    const id = 5
    const user = {name: 'Petro', age: 15}

    return (
        <div>
            <Link to={id.toString()} state={user}><button>UserDetails</button></Link>
            {/*<Link to={id.toString()} state={{user}}><button>UserDetails</button></Link>*/}
            <Outlet/>
        </div>
    );
};

export {UsersPage};
