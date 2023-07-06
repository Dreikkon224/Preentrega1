const products = [
    {id: '1', name:'Naruto', price: 2000, category: 'manga', img: 'https://http2.mlstatic.com/D_NQ_NP_724291-MLA44663400814_012021-O.webp', stock: 24, description: 'Volumen Nº8 de Naruto'},
    {id: '2', name:'boku no Hero Academy', price: 3500, category: 'cosplay', img: 'https://m.media-amazon.com/images/I/61FuIuScW6L._AC_UY1100_.jpg', stock: 8, description: 'Uniforme Femenino de U.A. '},
    {id: '3', name:'Kimetsu no yaiba', price: 550, category: 'accesorio', img: 'https://m.media-amazon.com/images/I/71MrXT03PwL._AC_UX522_.jpg', stock: 14, description: 'pendientes de Tanjiro Kamado'}
] 

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}