class Pizza {
    constructor (pizzaType, pizzaSize = "medium") {
        this.pizzaType = pizzaType;
        this.size = pizzaSize;
        this.crust = "original"
    }

    getCrust() {
        return this.pizzaCrust;
    }

    setCrust(crust) {
        this.crust = crust; 
    }

    bake() {
        console.log(`Baking a ${this.size} ${this.pizzaType} ${this.crust} crust pizza`)
    }
}
const myPizza = new Pizza("pepperoni", "small");

myPizza.setCrust("thin");
myPizza.bake();