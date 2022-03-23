// Inicio de armado de pizza
// Selección de masa

const startOrder = () => {
    let divMass = document.getElementById("mass")
    let listMass = ""
    MASS.forEach(product => {
        listMass += `<div class="animate__animated animate__zoomIn animate__faster p-10 my-5 bg-no-repeat bg-contain bg-center bg-${product.img}">
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
        listSize += `<div class="animate__animated animate__zoomIn animate__faster p-10 my-5 bg-no-repeat bg-contain bg-center bg-${product.img}">
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
        listSpeciality += `<div class="animate__animated animate__zoomIn animate__faster xp-10 my-5 bg-cover bg-center bg-${product.img} rounded-[20px]">
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
        let preCart = PREVIEW.slice()

        carrito.addCart({
            productID: preCart[0].productID,
            name: "Pizza armada",
            mass: preCart[1].name,
            size: preCart[2].name,
            specality: preCart[3].name,
            price: preCart[1].price + preCart[2].price + preCart[3].price,
            img: preCart[3].img,
            qty: 1
        })

        preCart.splice(0, preCart.length)

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
        order += `<div class="p-10 my-5 bg-no-repeat bg-contain  bg-center bg-${product.img}">
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



startOrder()
calculateTotalOrder()