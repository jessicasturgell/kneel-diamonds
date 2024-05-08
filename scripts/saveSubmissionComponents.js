import { saveJewelryOrder } from "./transientState.js"

const handleJewelryOrderClick = (clickEvent) => {
   if (clickEvent.target.id === "save-submission") {
    saveJewelryOrder()
   }
}

export const saveOrder = () => {
    document.addEventListener("click", handleJewelryOrderClick)

    return "<div><button id='save-submission'>Save Submission</button></div>"
}