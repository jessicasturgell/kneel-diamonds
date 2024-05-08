const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId": 0
}

export const setMetalId = (chosenLocation) => {
    transientState.metalId = chosenLocation
    console.log(transientState)
}

export const setStyleId = (chosenLocation) => {
    transientState.styleId = chosenLocation
    console.log(transientState)
}

export const setSizeId = (chosenLocation) => {
    transientState.sizeId = chosenLocation
    console.log(transientState)
}

export const saveJewelryOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    // Send the transient state to your API
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    
    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}