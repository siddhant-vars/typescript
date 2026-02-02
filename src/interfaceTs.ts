type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean

}

function makechai(order: ChaiOrder) {
    console.log(order)

}

function serverChai(order: ChaiOrder){
    console.log(order)
}

// type TeaReceipe = {
//     water: number,
//     milk: number
// }

interface TeaReceipe {
    water: number,
    milk: number
}

// class MassalaChai implements TeaReceipe {
//     water = 100;
//     milk = 50
// }
type cupsize = "small" | "large"

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon" // literal types

function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai = {tealeaves: number}
type extra = {masala: number}

type MassalaChai = BaseChai & extra

const chai: MassalaChai = {
    tealeaves : 2,
    masala : 1
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "sidd"}
const u2: User = {username: "sidd", bio: "hitesh.ai"}

