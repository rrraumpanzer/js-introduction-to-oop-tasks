import _ from 'lodash';

// BEGIN
class Cart {
    constructor() {
        this.contains = [];
    }
    addItem(item, count) {
        this.contains.push({item, count});
    }
    getItems() {
        return this.contains;
    }
    getCost() {
        var cost = 0;
        for (var i = 0; i < this.contains.length; i++ ) {
            cost += this.contains[i].item.price * this.contains[i].count;
        }
        return cost;
    }
    getCount() {
        var count = 0;
        for (var i = 0; i < this.contains.length; i++) {
            count += this.contains[i].count;
        };
        return count;
        };
    }
export function item(n, p) {
    const name = n;
    const price = p;

    const setName = (naem) => { name = naem; }
    const getName = () => { return name; }
    const setPrice = (prcie) => { price = prcie; }
    const getPrice = () => { return price; }

    return {setName, getName, setPrice, getPrice };
}

export default Cart;
// END
