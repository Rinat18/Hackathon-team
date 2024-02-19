export const getLocal = () => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    return cart
}

