export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

// The .map method interates through the entire array just like a for/of loop
    let MetalOptionsHTML = ""
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )
    
// The .map method requires .join to join all strings into one long string
    MetalOptionsHTML += divStringArray.join("")
    return MetalOptionsHTML
}