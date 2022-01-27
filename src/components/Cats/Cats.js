const Cats = ({cats, deleteCat}) => {
    return (
        <div>
            {cats.map((cat, index) => <div key={index}>{cat}  <button onClick={()=>deleteCat(cat)}>Delete</button></div>)}
        </div>
    );
};

export {Cats};
