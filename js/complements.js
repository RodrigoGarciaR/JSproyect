let complementList = []

fetch('../js/data.json')
    .then(response => response.json())
    .then(complements => {
        complementList = complements
        showComplements(complements)
    })


const showComplements = complements => {
    const div = document.getElementById('complements')
    let html = ''

    complements.forEach(complement => {
        html += `
        <div>
        <div>
            <img src="../images/complements/${complement.img}.png"
                alt="" class="max-h-[200px]">
        </div>
        <div class="text-center">
            <p>${complement.name}</p>
            <p>Precio: $${complement.price}</p>
            <button
                class="addComplement px-2 py-3 m-4 text-white transition-all duration-200 rounded shadow bg-secondary-200 hover:bg-secondary-50 shadow-secondary-400" id="c-${complement.id}">Agregar
                al carrito</button>
        </div>
        </div>
    `
    })

    div.innerHTML = html
    SetEventClickAddComplement()
}

const SetEventClickAddComplement = () => {
    btnAddComplement = document.getElementsByClassName('addComplement')
    for (const btn of btnAddComplement) {
        btn.onclick = carrito.addComplement
    }
}