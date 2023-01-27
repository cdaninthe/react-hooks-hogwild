import React, {useState} from "react";
import Hog from "./Hog";
import Filter from "./Filter";


function Hogs({hogs, setHogs}){
    const [hideHogs, setHideHog] = useState("")
    //const [sortHogsByName, setHogsByName] = useState(hogs)
    //const [sortHogsByWeight, setHogsByWeight] = useState(hogs)

    const greasedHogs = hogs.filter(hog => hog.greased === true)

    function handleHideHogs(){
        setHideHog(!hideHogs)
    }

    function handleGreasedClick(){
        setHogs(greasedHogs)
    }

    function handleCategoryChange(event){
        console.log('category change', event.target.value)
        if (event.target.value === "Name") {
            return sortByName()
        }
        else 
        if (event.target.value === "Weight") 
        {
            return sortByWeight()
        }
        //event.target.value === "Name" ? sortByName() : sortByWeight()
    }

    const sortedNames = hogs.sort((a,b) => {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
    }
    )
    console.log("sorted names", sortedNames)

    const sortedWeight = hogs.sort((a,b) => a.weight - b.weight)
    //console.log("sortHogsByWeight", sortHogsByWeight)
    console.log("sorted weight", sortedWeight)

    function sortByName(){
        console.log("function sortByName(), sorted names", sortedNames)
        setHogs(sortedNames);
    }

    function sortByWeight(){
        console.log("function sortByWeight(), sorted weight", sortedWeight);
        setHogs(sortedWeight);
    }

    return (
        <div>
            <button onClick={handleHideHogs}>
                {hideHogs ? "Show " : "Hide "} Hogs
            </button>
    
            <div hidden={hideHogs} className="ui grid container">
                <Filter 
                    onGreasedClick={handleGreasedClick}
                    onCategoryChange={handleCategoryChange}
                />

                {hogs.map(hog => (
                    <Hog  key={hog.name} image={hog.image} 
                        name={hog.name} specialty={hog.specialty} weight={hog.weight} 
                        greased={hog.greased ? "Greased" : "Not greased"} medal={hog["highest medal achieved"]}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Hogs;