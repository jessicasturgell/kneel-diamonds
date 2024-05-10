import { setTypeId } from "./transientState.js"

export const typeOptions = async () => {
    const response = await fetch("http://localhost:8088/types")
    const types = await response.json()

    document.addEventListener("change", handleOwnershipChange)

// .MAP METHOD:
    let typeOptionsHTML = ""
    const divStringArray = types.map(
        (type) => {
            return `<div><input type='radio' name='type' value='${type.id}'/>${type.type}</div>`
        }
    )

    typeOptionsHTML += divStringArray.join("")
    return typeOptionsHTML
}

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "type") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setTypeId(convertedToInteger)
    }
}