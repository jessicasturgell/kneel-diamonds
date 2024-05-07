export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let SizeOptionsHTML = ""

    const divStringArray = sizes.map(
        (size) => {
            return `<div><input type='radio' name='size' value='${size.id}' />${size.carets}</div>`
        }
    )
    
    SizeOptionsHTML += divStringArray.join("")
    return SizeOptionsHTML
}