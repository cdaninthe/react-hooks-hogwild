import React, {useState} from "react";

function Hog({image, name, specialty, weight, greased, medal}){
    const [hidden, setHidden] = useState("hidden")

    function handleTileClick(){
        setHidden(!hidden)
    }

    return(
        <div className="pigTile" >
            <img 
                src={image}
                alt={name}
            />
            <h1 onClick={handleTileClick}>{name}</h1>
            <div hidden={hidden}>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}lbs</p>
                <p>{greased}</p>
                <p>Highest medal achieved: {medal}</p>
            </div>
        </div>
    )
}

export default Hog;