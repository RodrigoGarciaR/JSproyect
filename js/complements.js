const Complements = document.getElementById('complements')

const pedirData = async () => {
    const resp = await fetch('../js/data.json')
    const info = await resp.json()

    console.log(info)

    info.forEach((post) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div>
            <img src="https://w.wallhaven.cc/full/83/wallhaven-83jeky.jpg"
                alt="" class="max-h-[200px]">
        </div>
        <div class="text-center">
            <p>${post.name}</p>
            <p>Precio: $${post.price}</p>
            <button
                class="px-2 py-3 m-4 text-white transition-all duration-200 rounded shadow deleteProduct bg-secondary-200 hover:bg-secondary-50 shadow-secondary-400">Agregar
                al carrito</button>
        </div>
    `
        Complements.append(div)
    })
}


pedirData()