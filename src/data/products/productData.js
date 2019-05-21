export default class ProductData{
    constructor(){
        this.products = getAllProducts();
    }
}

function getAllProducts(){
    let products = [
        createProduct(1, 'image.jpg', 'dope javket', '$2.99'),
    ]

    return products;
}

function createProduct(id, imageName, description, price){
    return {
        id: id,
        imageName: imageName,
        description: description,
        price: price
    }
}