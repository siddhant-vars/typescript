const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
}

let tea : {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "ginger tea",
    price: 20,
    isHot: true
}

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const adrakChai:Tea = {
    name: "adrakChai",
    price: 20,
    ingredients: ["adrak"]
}

type Cup = {size: string}
let smallCup:Cup = {size: "200ml"}

let bigCup = {size: "500ml",material: "steel"}

smallCup = bigCup
type brew = {brewTime: number}
const coffee = {brewTime: 5,beans: "arabica"}
const chaiBrew:brew = coffee

// type Chai = {
//     name: string,
//     price: number,
//     isHot: boolean
// }

// const updateChai = (updates: Partial<Chai>) => {
//     console.log("udating chai with", updates)
// }

// updateChai({price: 25})
// updateChai({isHot: true})
// updateChai({}) // problem creating issue

type Chaiorder = {
    name?:string;
    quantity?:number
}

const placeOrder = (order: Required<Chaiorder>) => {
    console.log(order)
}

// type place  = Required<Chai>

placeOrder({
    name: "Masala Chai",
    quantity: 2
})

type Chai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type ChaiNew = {
    name: string,
    price: number,
    isHot: boolean,
    secretingredients: string
}

type PublicChai = Omit<Chai,"secretingredients">