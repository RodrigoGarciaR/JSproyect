//Sección carrito de compra

const showCart = () => {
    let divCart = document.getElementById("cart")
    let cartinHTML = ""

    carrito.cart.forEach(product => {

        cartinHTML += `<div class="grid grid-cols-3 classTestFlex cartPreview" id="divDelete-${product.productID}">
        <div class="bg-cover bg-${product.img}" style="width: 75px; height: 75px;">
        </div>
        <ul class="text-left">
            <li><span class="font-bold">Producto: </span>${product.name}</li>
            <li><span class="font-bold">Precio p/p: </span>$ ${product.price}</li>
            <li><span class="font-bold">Cantidad: </span>${product.qty}</li>
            <li><span class="font-bold">Precio total: </span>$ ${product.price*product.qty}</li>
        </ul>
        <div><button
                class="px-2 py-3 m-4 text-white transition-all duration-200 rounded shadow deleteProduct bg-secondary-200 hover:bg-secondary-50 shadow-secondary-400"
                id="d-${product.productID}">Borrar</button></div>
    </div>`
    })

    divCart.innerHTML = cartinHTML
    registerClickeventeDeletProduct()
}



const registerClickeventeDeletProduct = () => {
    const deleteProduct = document.getElementsByClassName("deleteProduct")
    for (const btn of deleteProduct) {
        btn.onclick = carrito.deleteProductOfCart
    }
}

document.addEventListener("DOMContentLoaded", event = () => {
    let cartPreview = carrito.cart
    showCart(cartPreview)
})

//Mostrar menu mobile
const showMenuMobile = () => {
    document.getElementById('navMenu').style.display == 'block' ? document.getElementById('navMenu').style.display = 'none' : document.getElementById('navMenu').style.display = 'block'
}