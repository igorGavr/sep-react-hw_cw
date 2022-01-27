const Dogs = ({dogs,deleteDog}) => {
    return (
        <div>
            {dogs.map((dog,index) => <div key={index}>{dog} <button onClick={()=>deleteDog(dog)}>Delete</button> </div>)}
        </div>
    );
};

export {Dogs};
