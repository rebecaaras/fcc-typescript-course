type Pizza = {id: number, name: string, price: number}

type Order = { id: number
    pizza: Pizza
    status: "completed" | "cancelled" | "ordered" }

let pizzaId:number = 1;
const menu: Pizza[] = [
    {id: pizzaId++, name: "Margherita", price: 8 },
    {id: pizzaId++, name: "Pepperoni", price: 10 },
    {id: pizzaId++, name: "Hawaiian", price: 10 },
    {id: pizzaId++, name: "Veggie", price: 9 },
]

let cashInRegister: number = 100
let nextOrderId: number = 1
let orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj) //se menu foi declarado como const porque eu consigo fazer push?
}

function placeOrder(pizzaName: string) {
    const selectedPizza: Pizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${selectedPizza} does not exist in the menu.`);
        return        
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order: Order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${order} does not exist in the orderQueue.`);
        return        
    }
    order.status = "completed"
    return order
}

function removeOrder(orderId: number) {
    const order: Order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${order} does not exist in the orderQueue.`);
        return        
    }
    const orderIndex: number = orderQueue.findIndex(order => order.id === orderId)
    orderQueue.splice(orderIndex, orderIndex)
    cashInRegister -= order.pizza.price;
    
    return order
}

export function getPizzaDetail(identifier: string | number){
    if (typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError ("Parameter identifier must me either a number or a string")
    }
}

addNewPizza({id: pizzaId++, name: "Chicken Bacon Ranch", price: 12})
addNewPizza({id: pizzaId++, name: "BBQ Chicken", price: 12})
addNewPizza({id: pizzaId++, name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)
placeOrder("Pepperoni")

console.log("Menu", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue", orderQueue);
removeOrder(2)
console.log("Order queue after removing 2:", orderQueue);
console.log("Cash after removing 2:", cashInRegister);
console.log(getPizzaDetail("Pepperoni"))
