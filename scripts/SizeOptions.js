import { setSizeId } from "./transientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleOwnershipChange)

    let SizeOptionsHTML = ""

    const divStringArray = sizes.map(
        (size) => {
            return `<div><input type='radio' name='size' value='${size.id}' />${size.carets}</div>`
        }
    )
    
    SizeOptionsHTML += divStringArray.join("")
    return SizeOptionsHTML
}

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSizeId(convertedToInteger)
    }
}