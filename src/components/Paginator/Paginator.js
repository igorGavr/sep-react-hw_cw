import {Link} from "react-router-dom";

const Paginator = ({info: {pages, next, prev}}) => {
    const pagesArr = [];
    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i)
    }
    return (
        <div>

        </div>
    );
};

export {Paginator};
