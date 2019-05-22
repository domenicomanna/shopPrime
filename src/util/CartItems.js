export default class CartItems {
    cartItems = [];

    add(item) {
        let indexOfCartItem = this.cartItems.findIndex(cartItem => cartItem.item.id === item.id);

        if (indexOfCartItem === -1) {
            let cartItem = { item: item, quantity: 1 };
            this.cartItems.push(cartItem);
        }

        else this.cartItems[indexOfCartItem].quantity++;
    }

    getTotalPrice() {
        const totalPriceCalculator = (accumulator, currentCartItem) =>
            (accumulator + currentCartItem.item.price * currentCartItem.quantity);
            
        return this.cartItems.reduce(totalPriceCalculator, 0);
    }
}