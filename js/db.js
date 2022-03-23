const PREVIEW = []

class Carrito {
    constructor() {
        this.cart = []
    }

    addCart(pizza) {
        this.cart.push(pizza)
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    addComplement(event) {
        const complementID = event.target.id.split('-')[1]
        const product = complementList.find(p => p.id == complementID)
        let complementInCart = carrito.cart.find(p => p.id == product.id)
        if (complementInCart) {
            complementInCart.qty++
            localStorage.setItem('cart', JSON.stringify(carrito.cart))
            showCart()
        } else {
            let productID = localStorage.getItem('lastProductID') || "0"
            let newProductID = JSON.parse(productID) + 1
            localStorage.setItem('lastProductID', JSON.stringify(newProductID))
            carrito.cart.push({
                productID: newProductID,
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                qty: 1
            })
            localStorage.setItem('cart', JSON.stringify(carrito.cart))
            showCart()
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto fue agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })



    }

    initCart() {
        JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).forEach(element => this.cart.push(element)) : localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    deleteProductOfCart(event) {

        const productID = event.target.id.split('-')[1]
        let productToDelete = JSON.parse(localStorage.getItem('cart'))
        let productIndex = productToDelete.findIndex(e => e.productID === parseFloat(productID))
        productToDelete.splice(productIndex, 1)
        localStorage.setItem('cart', JSON.stringify(productToDelete))
        document.getElementById(`divDelete-${productID}`).remove()

    }


}

const carrito = new Carrito()
carrito.initCart()

const MASS = [{
        id: 1,
        name: "Original",
        img: "original",
        price: 100,
    },
    {
        id: 2,
        name: "Italiana",
        img: "italiana",
        price: 150,
    },
    {
        id: 3,
        name: "Sartén",
        img: "sarten",
        price: 175,
    },
    {
        id: 4,
        name: "Orilla de Queso",
        img: "orillaQueso",
        price: 200,
    },
    {
        id: 5,
        name: "Crunchy",
        img: "crunchy",
        price: 200,
    },
]

const SIZE = [{
        id: 1,
        name: "Mediana",
        img: "mediana",
        price: 50
    },
    {
        id: 2,
        name: "Grande",
        img: "grande",
        price: 75
    },
    {
        id: 3,
        name: "Familiar",
        img: "familiar",
        price: 100
    },
]
const SPECIALITY = [{
        id: 1,
        name: "Napolitana",
        img: "napolitana",
        price: 100
    },
    {
        id: 2,
        name: "Hawaiana",
        img: "hawaiana",
        price: 100
    },
    {
        id: 3,
        name: "Pepperoni",
        img: "pepperoni",
        price: 100
    },
    {
        id: 4,
        name: "Vegetariana",
        img: "vegetariana",
        price: 200
    },
    {
        id: 5,
        name: "Cuatro Quesos",
        img: "cuatroQuesos",
        price: 225
    },
]
const SHIP = [{
        id: 1,
        name: true,
        price: 15
    },
    {
        id: 2,
        name: false,
        price: 0
    }
]