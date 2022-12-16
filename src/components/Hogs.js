import React from "react";
import Hog from "./Hog";

function Hogs({hogs}){

    return (
        <div>
            {hogs.map(hog => (
                <Hog className="ui grid container" key={hog.name} image={hog.image} 
                    name={hog.name} specialty={hog.specialty} weight={hog.weight} 
                    greased={hog.greased ? "Greased" : "Not greased"}
                />
            ))}
        </div>
    )
}

export default Hogs;