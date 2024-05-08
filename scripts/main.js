import { MetalOptions } from "./MetalOptions.js"
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"
import { Orders } from "./orders.js"
import { saveOrder } from "./saveSubmissionComponents.js"

const container = document.querySelector("#container")

const render = async () => {
    const MetalOptionsHTML = await MetalOptions()
    const SizeOptionsHTML = await SizeOptions()
    const StyleOptionsHTML = await StyleOptions()
    const ordersHTML = await Orders()
    const buttonHTML = await saveOrder()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>
        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${MetalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${SizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${StyleOptionsHTML}
                <br>
                <div>${buttonHTML}</div>
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newSubmissionCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()