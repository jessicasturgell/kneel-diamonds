export const orders = async () => {
    const ordersFetch = await fetch("http://localhost:8088/orders")
    const orders = await ordersFetch.json()

    let ordersHTML = ""
    const divStringArray = orders.map(
        (order) => {
          return `<div>${order}</div>`
        }
    )

    ordersHTML += divStringArray.join("")
    return ordersHTML
}