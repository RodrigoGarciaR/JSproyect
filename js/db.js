const PREVIEW = []

class FinishPizza {
    constructor(mass, size, speciality) {
        this.mass = mass
        this.size = size
        this.speciality = speciality
    }

}

class Carrito {
    constructor() {
        this.cart = []
    }

    addCart(pizza) {
        this.cart.push(pizza)
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }
}

const carrito = new Carrito()

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