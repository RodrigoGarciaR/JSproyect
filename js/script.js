// Inicio de armado de pizza
// Selección de masa

const startOrder = () => {
    let divMass = document.getElementById("mass")
    let listMass = ""
    MASS.forEach(product => {
        listMass += `<div class="p-10 my-5 bg-no-repeat bg-contain bg-center bg-${product.name}">
        <p class="font-bold text-lg text-center">${product.name}</p>
        <p class="text-center">$ ${product.price}</p>

        <p><button
                class="addMass px-2 py-3 m-4 text-white transition-all duration-200 rounded shadow bg-secondary-200 hover:bg-secondary-50 shadow-secondary-400"
                id="m-${product.id}">Elegir masa</button></p>
    </div>`

    })

    divMass.innerHTML = listMass

    registerClickeventMass()
}

const registerClickeventMass = () => {
    const btnAddMass = document.getElementsByClassName("addMass")
    for (const btn of btnAddMass) {
        btn.onclick = selectMass
    }
}

const selectMass = (event) => {
    const massID = event.target.id.split("-")[1]
    const mass = MASS.find(p => p.id == massID)
    PREVIEW.push(mass)
    document.getElementById("massContainer").style.display = "none"
    document.getElementById("sizeContainer").style.display = "block"
    showOrder()
    calculateTotalOrder()
    pickSize()
}

// Selección de tamaño

const pickSize = () => {
    let divSize = document.getElementById("size")
    let listSize = ""
    SIZE.forEach(product => {
        listSize += `<div class="p-10 my-5 bg-no-repeat bg-contain bg-center bg-${product.name}">
        <p class="font-bold text-lg text-center">${product.name}</p>
        <p class="text-center">$ ${product.price}</p>

        <p><button
                class="addSize px-2 py-3 m-4 text-white transition-all duration-200 rounded shadow bg-secondary-200 hover:bg-secondary-50 shadow-secondary-400"
                id="s-${product.id}">Elegir tamaño</button></p>
    </div>`
    })
    divSize.innerHTML = listSize

    registerClickeventSize()
}

const registerClickeventSize = () => {
    const btnAddSize = document.getElementsByClassName("addSize")
    for (const btn of btnAddSize) {
        btn.onclick = selectSize
    }
}

const selectSize = (event) => {
    const sizeID = event.target.id.split("-")[1]
    const size = SIZE.find(p => p.id == sizeID)
    PREVIEW.push(size)
    document.getElementById("sizeContainer").style.display = "none"
    document.getElementById("specialityContainer").style.display = "block"
    showOrder()
    calculateTotalOrder()
    pickSpeciality()
}

// Selección de especialidad

const pickSpeciality = () => {
    let divSpeciality = document.getElementById("speciality")
    let listSpeciality = ""
    SPECIALITY.forEach(product => {
        listSpeciality += `<div class="p-10 my-5 bg-cover bg-center bg-${product.name} rounded-[20px]">
            <p class="font-bold text-lg text-center">${product.name}</p>
            <p class="text-center">$ ${product.price}</p>
    
            <p><button
                    class="addSpeciality px-2 py-3 m-4 text-white transition-all duration-200 rounded shadow bg-secondary-200 hover:bg-secondary-50 shadow-secondary-400"
                    id="sp-${product.id}">Elegir especialidad</button></p>
        </div>`
    })
    divSpeciality.innerHTML = listSpeciality

    registerClickeventSpeciality()
}

const registerClickeventSpeciality = () => {
    const btnAddSpeciality = document.getElementsByClassName("addSpeciality")
    for (const btn of btnAddSpeciality) {
        btn.onclick = selectSpeciality
    }
}

const selectSpeciality = (event) => {
    const specialityID = event.target.id.split("-")[1]
    const speciality = SPECIALITY.find(p => p.id == specialityID)
    PREVIEW.push(speciality)
    document.getElementById("specialityContainer").style.display = "none"
    document.getElementById("question").style.display = "block"

    showOrder()
    calculateTotalOrder()
    confirmOrder()
}

// ID producto cart

const productIDinCart = () => {
    let productID = localStorage.getItem('lastProductID') || "0"
    let newProductID = JSON.parse(productID) + 1
    localStorage.setItem('lastProductID', JSON.stringify(newProductID))
    PREVIEW.unshift({
        "productID": newProductID
    })
}

// Botón confirmar pizza

const confirmOrder = () => {
    let buttonConfirm = document.getElementById("confirmPreview")
    buttonConfirm.onclick = () => {
        document.getElementById("question").style.display = "none"
        document.getElementById("reset").style.display = "block"
        document.getElementById("thanks").style.display = "block"
        productIDinCart()
        pushToCart()
        splicePreview()
        showOrder()
        showCart()
        calculateTotalOrder()
        resetOrder()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto fue agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }

    // Botón borrar pizza

    let buttonDelete = document.getElementById("deletePreview")
    buttonDelete.onclick = () => {
        document.getElementById("question").style.display = "none"
        document.getElementById("reset").style.display = "block"
        splicePreview()
        showOrder()
        calculateTotalOrder()
        resetOrder()
    }
}

// Reiniciar orden

const resetOrder = () => {
    let buttonReset = document.getElementById("resetOrder")
    buttonReset.onclick = () => {
        document.getElementById("reset").style.display = "none"
        document.getElementById("thanks").style.display = "none"
        document.getElementById("massContainer").style.display = "block"
        startOrder()
    }
}


const pushToCart = () => {
    carrito.addCart(PREVIEW.slice())
}

const splicePreview = () => {
    PREVIEW.splice(0, PREVIEW.length)

}

const showOrder = () => {
    let divOrder = document.getElementById("order")
    let order = ""

    PREVIEW.forEach(product => {
        order += `<div class="p-10 my-5 bg-no-repeat bg-contain  bg-center bg-${product.name}">
            <p class="font-bold text-lg text-center">${product.name}</p>
            <p class="text-center">$ ${product.price}</p></div>`
    })
    divOrder.innerHTML = order
}

const calculateTotalOrder = () => {
    let sumaTotal = 0
    PREVIEW.forEach(p => sumaTotal += p.price)
    const totalOrder = document.getElementById("totalOrder")
    totalOrder.innerHTML = sumaTotal
}

//Sección carrito de compra

const showCart = () => {
    let divCart = document.getElementById("cart")
    let cartinHTML = ""

    carrito.cart.forEach(product => {
        let totalProduct = product[1].price + product[2].price + product[3].price
        cartinHTML += `<div class="flex cartPreview" id="divDelete-${product[0].productID}">
        <div>
            <p>Producto</p>
        </div>
        <ul class="ml-10">
            <li>Masa: ${product[1].name}</li>
            <li>Tamaño: ${product[2].name}</li>
            <li>Especialidad: ${product[3].name}</li>
            <li>Precio: ${totalProduct}</li>
        </ul>
        <div><button
                class="px-2 py-3 m-4 text-white transition-all duration-200 rounded shadow deleteProduct bg-secondary-200 hover:bg-secondary-50 shadow-secondary-400"
                id="d-${product[0].productID}">Borrar producto</button></div>
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

startOrder()
calculateTotalOrder()