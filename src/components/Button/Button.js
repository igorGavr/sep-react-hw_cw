import {Link, NavLink} from "react-router-dom";

const Button = ({to, state, isNav, children, ...props}) => {
    return (
        <>
            {
                isNav ?
                    <NavLink to={to} state={state} {...props}>
                        <button>{children}</button>
                    </NavLink>
                    :
                    <Link to={to} state={state} {...props}>
                        <button>{children}</button>
                    </Link>
            }
        </>
    );
};

export {Button};
