import { setStyleId } from "./transientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleOwnershipChange)

// .MAP METHOD:
    let StyleOptionsHTML = ""
    const divStringArray = styles.map(
        (style) => {
            return `<div><input type='radio' name='style' value='${style.id}' />${style.style}</div>`
        }
    )

    StyleOptionsHTML += divStringArray.join("")
    return StyleOptionsHTML
}

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setStyleId(convertedToInteger)
    }
}

// FOR/OF METHOD:
    //     let StyleOptionsHTML = ""
    //     for (const style of styles) {
    //         StyleOptionsHTML += `<div>
    //         <input type='radio' name='style' value='${style.id}' />${style.style}</div>`
    //     }

    //     return StyleOptionsHTML
    // }