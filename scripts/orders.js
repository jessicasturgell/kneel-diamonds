export const Orders = async () => {
  const response = await fetch("api/database.json")
  const data = await response.json()

  const { styles, sizes, metals } = data

  const fetchResponse = await fetch("http://localhost:8088/orders")
  const orders = await fetchResponse.json()

  let ordersHTML = ""
  for (const order of orders) {

    const selectedStyle = styles.find(style => style.id === order.styleId)
    const selectedSize = sizes.find(size => size.id === order.sizeId)
    const selectedMetal = metals.find(metal => metal.id === order.metalId)

    const totalPrice = selectedStyle.price + selectedSize.price + selectedMetal.price;

    ordersHTML += `<div>Style: ${selectedStyle.style}</div>`
    ordersHTML += `<div>Size: ${selectedSize.carets} carets</div>`
    ordersHTML += `<div>Metal: ${selectedMetal.metal}</div>`
    ordersHTML += `<div>Total Price: $${totalPrice.toFixed(2)}</div>`
    ordersHTML += "<hr>"; // add a horizontal line between orders
  }

  return ordersHTML
}