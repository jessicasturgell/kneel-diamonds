export const Orders = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
  const orders = await fetchResponse.json()

  let ordersHTML = ""
  for (const order of orders) {

    const orderPrice = order.metal.price + order.style.price + order.size.price;

    ordersHTML += `<div>Order Number: ${order.id}</div>`
    ordersHTML += `<div>Style: ${order.style.style}</div>`
    ordersHTML += `<div>Size: ${order.size.carets} carets</div>`
    ordersHTML += `<div>Metal: ${order.metal.metal}</div>`
    ordersHTML += `<div>Total Price: $${orderPrice}</div>`
    ordersHTML += "<hr>" // add a horizontal line between orders
  }

  return ordersHTML
}