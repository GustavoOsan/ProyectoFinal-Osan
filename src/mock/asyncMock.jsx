const data = [
    { id: '1', title: 'Remera TMBTE', description: 'Remera TMBTE', price: 45, stock: 10, category: 'clothes', img: '../tshirt-black.png' },
    { id: '2', title: 'Remera TMBTE', description: 'Remera TMBTE tapa cd', price: 45, stock: 10, category: 'clothes', img: '../tshirt.png' },
    { id: '3', title: 'Rompevientos Even in Arkadia', description: 'Rompevientos', price: 80, stock: 10, category: 'clothes', img: '../rompevientos.webp' },
    { id: '4', title: 'Buzo Blanco', description: 'Buzo Blanco', price: 70, stock: 8, category: 'clothes', img: '../buzo-blanco.png' },
    { id: '5', title: 'Canguro Negro', description: 'Canguro Negro', price: 70, stock: 7, category: 'clothes', img: '../buzo-negro.png' },
    { id: '6', title: 'Hoddie Negro', description: 'Hoddie Negro', price: 75, stock: 3, category: 'clothes', img: '../hoddie-black.png' },
    { id: '7', title: 'Gorra Rosa', description: 'Gorra rosa', price: 35, stock: 40, category: 'clothes', img: '../hat.webp' },
    { id: '8', title: 'Gorra negra', description: 'Gorra negra', price: 35, stock: 40, category: 'clothes', img: '../hat-dos.webp' },
    { id: '9', title: 'Even in Arkadia', description: 'vinilo Even in Arkadia', price: 40, stock: 35, category: 'Discos', img: '../eia-vinyl.webp' },
    { id: '10', title: 'Take me back to Eden GOLD', description: 'vinilo Take me back to Eden GOLD', price: 40, stock: 15, category: 'Discos', img: '../tmbte-2vinyl.png' },
    { id: '11', title: 'Take me back to Eden', description: 'vinilo Take me back to Eden', price: 25, stock: 13, category: 'Discos', img: '../tmbte-vinyl.png' },
    { id: '12', title: 'Poster 1', description: 'Poster 1', price: 20, stock: 20, category: 'Merch', img: '../poster.png' },
    { id: '13', title: 'Poster 2', description: 'Poster 2', price: 20, stock: 20, category: 'Merch', img: '../poster-dos.jpg' },
    { id: '14', title: 'Poster 3', description: 'Poster 3', price: 20, stock: 20, category: 'Merch', img: '../poster-tres.jpeg' },
    { id: '15', title: 'Pintura', description: 'Pintura', price: 25, stock: 10, category: 'Merch', img: '../tmbte-paint.png' },

]

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(data)
            } else {
                reject('Hubo un error');
            }
        }, 2000);
    })
}


export const getItem = (id) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            let product = data.find((item) => item.id === id);
            resolve(product)
        }, 2000)
    })
}
