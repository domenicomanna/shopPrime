export default class ProductData{
    constructor(){
        this.products = getAllProducts();
    }

    getProduct(index){
        return this.products[index];
    }
}

function getAllProducts(){
    return [
        createProduct(1, 'blackSuit.jpg', 'Fine black suit', 99.99),
        createProduct(2, 'blackSuitJacket.jpg', 'Black suit jacket', 49.99),
        createProduct(3, 'blueShirt.jpg', 'Blue long sleeve shirt', 19.99),
        createProduct(4, 'blueSuit.jpg', 'Newton blue suit', 99.99),
        createProduct(5, 'crewWhite.jpg', 'Classic white crew t-shirt', 9.99),
        createProduct(6, 'greyCollarShirt.jpg', 'Grey Button Down shirt', 29.99),
        createProduct(7, 'blackSuitWithBowtie.jpg', 'Charcoal Suit', 99.99),
        createProduct(8, 'greySuitJacket.jpg', 'Grey Suit Jacket', 49.99),
        createProduct(9, 'leatherJacket.jpg', 'Brown Leather Jacket', 79.99),
        createProduct(10, 'rainZipUp.jpg', 'Waterproof zipup', 39.99),
        createProduct(11, 'simpsonsShirt.jpg', 'Fun Simpsons Shirt', 9.99),
        createProduct(12, 'vest.jpg', 'Grey Vest', 29.99),
    ]
}

function createProduct(id, imageName, description, price){
    return {
        id: id,
        imageName: imageName,
        description: description,
        price: price
    }
}