const PREVIEW = []

class Carrito {
    constructor() {
        this.cart = []
    }

    addCart(pizza) {
        this.cart.push(pizza)
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    initCart() {
        JSON.parse(localStorage.getItem('cart')) && JSON.parse(localStorage.getItem('cart')).forEach(element => this.cart.push(element))
    }

    deleteCart(productID) {
        console.log(productID)
        // let productToDelete = JSON.parse(localStorage.getItem('cart'))
        // console.log(productToDelete)
        // let productIndex = productToDelete.findIndex(e => e[0].productID === productID)
        // console.log(productIndex)
        // productToDelete.splice(productIndex, 1)
        // console.log(productToDelete)
        // localStorage.setItem('cart', JSON.stringify(productToDelete))
    }
}

const carrito = new Carrito()
carrito.initCart()

const MASS = [{
        id: 1,
        name: "original",
        price: 100,
    },
    {
        id: 2,
        name: "italiana",
        price: 150,
    },
    {
        id: 3,
        name: "sarten",
        price: 175,
    },
    {
        id: 4,
        name: "orillaQueso",
        price: 200,
    },
    {
        id: 5,
        name: "crunchy",
        price: 200,
    },
]

const SIZE = [{
        id: 1,
        name: "mediana",
        price: 50
    },
    {
        id: 2,
        name: "grande",
        price: 75
    },
    {
        id: 3,
        name: "familiar",
        price: 100
    },
]
const SPECIALITY = [{
        id: 1,
        name: "napolitana",
        price: 100
    },
    {
        id: 2,
        name: "hawaiana",
        price: 100
    },
    {
        id: 3,
        name: "pepperoni",
        price: 100
    },
    {
        id: 4,
        name: "vegetariana",
        price: 200
    },
    {
        id: 5,
        name: "cuatroQuesos",
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