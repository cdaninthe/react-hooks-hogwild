import React, {useState} from "react";

function NewHogForm ({onHogFormSubmit}) {
    const [hogName, setHogName] = useState("");
    const [hogSpecialty, setHogSpecialty] = useState("");
    const [hogWeight, setHogWeight] = useState(1);
    const [hogImage, setHogImage] = useState("https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png");
    const [hogMedal, setHogMedal] = useState("");
    const [hogGreased, setHogGreased] = useState(false);

    function handleNameChange(event){
        setHogName(event.target.value)
    }

    function handleImageChange(event){
        setHogImage(event.target.value)
    }

    function handleSpecialtyChange(event){
        setHogSpecialty(event.target.value)
    }

    function handleWeightChange(event){
        setHogWeight(event.target.value)
    }
    
    function handleMedalChange(event){
        setHogMedal(event.target.value)
    }
    
    function onGreasedChange(event){
        setHogGreased(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        const newHog = {
            name: hogName,
            specialty: hogSpecialty,
            greased: hogGreased,
            weight: hogWeight,
            "highest medal achieved": hogMedal,
            image:hogImage,
        }
        console.log(newHog)
        onHogFormSubmit(newHog)
    }

    return (
        <form className="new-task-form" onSubmit={handleFormSubmit}>
            <h2>New hog form</h2>
            <label>
                Name
                <input type="text" name="text" onChange={handleNameChange}/>
            </label>
            <label>
                Image
                <input type="text" name="text" onChange={handleImageChange}/>
            </label>
            <label>
                Specialty
                <input type="text" name="specialty" onChange={handleSpecialtyChange}/>
            </label>
            <label>
             Weight
                <input type="number" min="0" name="weight" onChange={handleWeightChange}/>
            </label>
            <label>
                Highest medal achieved
                <input type="text" name="medal" onChange={handleMedalChange}/>
            </label>
            <select name="category" onChange={onGreasedChange}>
                <option value="false">not greased</option>
                <option value="true">greased</option>
            </select>
            <input type="submit" value="Add hog" />
        </form>
    )
}

export default NewHogForm;