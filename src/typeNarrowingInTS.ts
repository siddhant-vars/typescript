function getChai(kind: string|number) {
    if(typeof kind === "string"){
        return `Making ${kind} ..`
    }
    return `chai order: ${kind}`
}

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`
    }
    return `serving default masala chai`
}

function teaSize(size: 'small' | 'medium' | 'large' | number) {
    if(size === 'small'){
        return `person drink small tea`
    }
    if(size === 'medium' || size === 'large') {
        return `person is fond of tea`
    }
    return `chai price is ${size}`
}

class khuladhChai{
    serve(){
        return `KhuladhChai is served`
    }
}

class cuttingChai {
    server() {
        return `cutting chai is sevrve`
    }
}

function serve(chai : khuladhChai | cuttingChai){
    if(chai instanceof khuladhChai) {
        return chai.serve();
    }
}

type ChaiOrder = {
    type: 'string',
    sugar: 'number'
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.type === "string"  &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder|string){
    if(isChaiOrder(item)) {
        return `serving ${item.type} with sugar ${item.sugar}`
    }
}

type masalaChai = {type: "masalachai", spicelevel: number}
type gingerChai = {type: "gingerChai", amount: number}
type elaichiChai = {type: "elaichiChai", amount: number}

type Chai = masalaChai | gingerChai | elaichiChai 

function makeChai(order: Chai) {
    switch (order.type) {
        case "masalachai":
            return `masalchai is preparing`
            break;
        
        case "gingerChai" :
            return `gingerchai is preparing`
            break;

        case "elaichiChai" :
            return `elaichiChai is preparing`
            break;
    
        default:
            break;
    }
}
