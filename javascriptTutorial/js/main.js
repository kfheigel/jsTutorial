class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;

    constructor (pizzaSize = "medium") {
        this.#size = pizzaSize;
    }

    getCrust() {
        return this.crust;
    }
    setCrust(crust) {
        this.crust = crust; 
    }

    hereYoyGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
    }
}
const myPizza = new Pizza("large");

myPizza.setCrust("thin");

myPizza.hereYoyGo();

console.log(myPizza.sauce);
