const startOrder = () => {
    let divMass = document.getElementById("mass")
    let listMass = ""
    MASS.forEach(product => {
        listMass += `<div class="p-10 my-5 bg-cover bg-center bg-${product.name}">
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
    PREORDER.push(mass.name)
    CART.push(mass)
    document.getElementById("massContainer").style.display = "none"
    document.getElementById("sizeContainer").style.display = "block"
    showOrder()
    calculateTotalOrder()
}

const pickSize = () => {
    let divSize = document.getElementById("size")
    let listSize = ""
    SIZE.forEach(product => {
        listSize += `<div class="p-10 my-5 bg-cover bg-center bg-${product.name}">
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
    PREORDER.push(size.name)
    CART.push(size)
    document.getElementById("sizeContainer").style.display = "none"
    document.getElementById("specialityContainer").style.display = "block"
    showOrder()
    calculateTotalOrder()
}
const pickSpeciality = () => {
    let divSpeciality = document.getElementById("speciality")
    let listSpeciality = ""
    SPECIALITY.forEach(product => {
        listSpeciality += `<div class="p-10 my-5 bg-cover bg-center bg-${product.name}">
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
    PREORDER.push(speciality.name)
    CART.push(speciality)
    document.getElementById("specialityContainer").style.display = "none"
    document.getElementById("thanks").style.display = "block"
    showOrder()
    calculateTotalOrder()
    pushToOrder()
    splicePreorder()
}

const showOrder = () => {
    let divOrder = document.getElementById("order")
    let order = ""

    CART.forEach(product => {
        order += `<div class="p-10 my-5 bg-cover bg-center bg-${product.name}">
        <p class="font-bold text-lg text-center">${product.name}</p>
        <p class="text-center">$ ${product.price}</p></div>`

    })

    divOrder.innerHTML = order
}

const calculateTotalOrder = () => {
    let sumaTotal = 0

    CART.forEach(p => sumaTotal += p.price)


    const totalOrder = document.getElementById("totalOrder")
    totalOrder.innerHTML = sumaTotal
}

const pushToOrder = () => {

    ORDER.push(new finishPizza(PREORDER[0], PREORDER[1], PREORDER[2]))


}
const splicePreorder = () => {
    PREORDER.splice(0, PREORDER.length)

}


calculateTotalOrder()
startOrder()
pickSize()
pickSpeciality()